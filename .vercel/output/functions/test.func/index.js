export default async (req, res) => {
	res.writeHead(200);

	res.end(`rendered in ${process.env.VERCEL_REGION}`);
};
