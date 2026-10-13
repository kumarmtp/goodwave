// Prefixes an internal path with the configured `base` (e.g. `/goodwave`).
// `path` must start with `/`.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path: string) => `${base}${path}`;
