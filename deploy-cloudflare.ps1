# Builds the site and deploys it to Cloudflare Pages with Wrangler.
#
# Run from any folder (bypasses the execution policy for this script only):
#   powershell -ExecutionPolicy Bypass -File .\deploy-cloudflare.ps1
#   powershell -ExecutionPolicy Bypass -File .\deploy-cloudflare.ps1 -ProjectName my-name
#
# The first run opens your browser to sign in to Cloudflare; later runs reuse that login.

param(
    [string]$ProjectName = 'goodwave'
)

$ErrorActionPreference = 'Stop'
Set-Location -Path $PSScriptRoot

function Invoke-Step {
    param([string]$Title, [scriptblock]$Action)
    Write-Host "`n==> $Title" -ForegroundColor Cyan
    & $Action
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed: $Title (exit code $LASTEXITCODE)" -ForegroundColor Red
        exit $LASTEXITCODE
    }
}

$wrangler = @('--yes', 'wrangler@4')

# 1. Node.js 22.12+ is required by Astro.
if (-not (Get-Command node.exe -ErrorAction SilentlyContinue)) {
    Write-Host 'Node.js is not installed. Install Node 22 LTS from https://nodejs.org and run again.' -ForegroundColor Red
    exit 1
}
$nodeVersion = [version]((node.exe --version).TrimStart('v'))
if ($nodeVersion -lt [version]'22.12.0') {
    Write-Host "Node $nodeVersion found; Astro needs 22.12 or newer. Update from https://nodejs.org." -ForegroundColor Red
    exit 1
}

# 2. Dependencies.
if (-not (Test-Path 'node_modules')) {
    Invoke-Step 'Installing dependencies' { npm.cmd ci }
}

# 3. Cloudflare login (browser sign-in; your password never touches this script).
Write-Host "`n==> Checking Cloudflare login" -ForegroundColor Cyan
$whoami = (& npx.cmd @wrangler whoami 2>&1 | Out-String)
if ($whoami -match 'not authenticated') {
    Invoke-Step 'Signing in to Cloudflare (a browser window will open)' { npx.cmd @wrangler login }
} else {
    Write-Host 'Already signed in.'
}

# 4. Create the Pages project if it doesn't exist yet.
Write-Host "`n==> Checking for Pages project '$ProjectName'" -ForegroundColor Cyan
$projects = (& npx.cmd @wrangler pages project list 2>&1 | Out-String)
if ($projects -notmatch "\b$([regex]::Escape($ProjectName))\b") {
    Invoke-Step "Creating Pages project '$ProjectName'" {
        npx.cmd @wrangler pages project create $ProjectName --production-branch main
    }
} else {
    Write-Host 'Project already exists.'
}

# 5. Build and deploy.
Invoke-Step 'Building the site' { npm.cmd run build }
Invoke-Step 'Deploying to Cloudflare Pages' {
    npx.cmd @wrangler pages deploy dist --project-name $ProjectName --branch main --commit-dirty=true
}

Write-Host "`nDone. The site is live at the https://*.pages.dev URL shown above." -ForegroundColor Green
