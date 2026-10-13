// Corporate particulars exactly as stated in goodwave_profile_v2.pdf (pages 4 and 12).
// They are supplied by the company and have not been independently verified against ACRA.
export const company = {
	legalName: 'GOOD WAVE E&C PTE. LTD.',
	shortName: 'Good Wave E&C',
	description: 'Singapore-registered building construction contractor',
	entityType: 'Singapore Private Company Limited by Shares',
	uen: '202114466R',
	incorporated: '22 April 2021',
	status: 'Live Company',
	paidUpCapital: 'SGD 100,000',
	previousName: 'APR ENGINEERING',
	businessActivity: 'General Contractors (Building Construction including Major Upgrading Works)',
	address: {
		street: '740 Pasir Ris Street 71, #02-55',
		city: 'Singapore',
		postalCode: '510740',
		country: 'SG',
	},
	phone: {
		display: '+65 96644506',
		href: 'tel:+6596644506',
	},
} as const;

export const fullAddress = `${company.address.street}, ${company.address.city} ${company.address.postalCode}`;

export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
	`740 Pasir Ris Street 71, Singapore ${company.address.postalCode}`,
)}`;

// Portfolio summary (PDF page 11). The total is S$560,000 + S$140,000 + S$1,450,682
// and is a sum of stated project values, not company turnover.
export const portfolioSummary = {
	projectCount: 3,
	combinedStatedValue: 2150682,
	periodSpan: '2026–2029',
};

export const formatSGD = (value: number) => `S$${value.toLocaleString('en-SG')}`;

export const navItems = [
	{ href: '/', label: 'Home' },
	{ href: '/about/', label: 'About' },
	{ href: '/capabilities/', label: 'Capabilities' },
	{ href: '/projects/', label: 'Projects' },
	{ href: '/contact/', label: 'Contact' },
] as const;
