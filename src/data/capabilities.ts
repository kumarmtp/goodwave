// Capability categories and descriptions from goodwave_profile_v2.pdf page 10 ("07 · Capabilities").
// `projects` lists the content-collection ids whose documented scope includes the capability.
export const capabilities = [
	{
		id: 'structural-steel',
		number: '01',
		title: 'Structural steel',
		summary: 'Steel structure installation supporting linkways, pavilions, porches and associated structures.',
		points: [
			'Structural steel installation and associated steelwork packages.',
			'Linkways, drop-off porches, pavilions and related architectural steel elements.',
		],
		projects: ['tengah-pa-c1-cg', 'bukit-merah-c54-54a'],
	},
	{
		id: 'railings-barriers',
		number: '02',
		title: 'Railings & barriers',
		summary: 'Staircase, corridor, AC ledge railing and crash-barrier installation.',
		points: ['Railing installation including staircase, AC ledge, corridor and crash-barrier applications.'],
		projects: ['bukit-merah-c54-54a'],
	},
	{
		id: 'temporary-works',
		number: '03',
		title: 'Temporary works',
		summary: 'Steelwork packages supporting infrastructure and civil construction activities.',
		points: ['Temporary works and steel drain works supporting major infrastructure construction.'],
		projects: ['contract-n110-north-south-corridor'],
	},
	{
		id: 'site-coordination',
		number: '04',
		title: 'Site coordination',
		summary: 'Construction-stage execution across residential and major infrastructure environments.',
		points: [
			'Work packages within large-scale residential, transport and public-infrastructure developments.',
			'Coordination of steelwork interfaces with completed and ongoing building works.',
		],
		projects: ['tengah-pa-c1-cg', 'contract-n110-north-south-corridor', 'bukit-merah-c54-54a'],
	},
] as const;

export type CapabilityId = (typeof capabilities)[number]['id'];
