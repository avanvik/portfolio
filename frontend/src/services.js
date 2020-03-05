import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: '3zp63eks',
	dataset: 'production',
	useCdn: false
})

export const getPortfolioEntries = () => {
	const groq = '*[_type=="portfolioEntry"]{..., content[]{..., "url": asset->url}}';
	return client.fetch(groq);
}