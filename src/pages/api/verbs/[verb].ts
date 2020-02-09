import { NextApiRequest, NextApiResponse } from 'next';
import to from 'await-to-js';
import memoize from 'lodash.memoize';
import fetch from 'isomorphic-fetch';

const token = process.env.VERBIX_TOKEN;

const getVerb = memoize(async (verb: string) => {
	const url = encodeURI(
		`https://api.verbix.com/conjugator/json/${token}/v2/rus/${verb}`,
	);

	const [error, response] = await to(fetch(url));

	if (error) {
		throw error;
	}

	if (response.ok) {
		return await response.json();
	}

	throw new Error('Unable to retrieve the verb');
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { verb } = req.query;

	const [error, data] = await to(getVerb(Array.isArray(verb) ? verb[0] : verb));

	if (error) {
		console.log(error);

		return res.status(500).json(JSON.stringify(error));
	}

	res.json(data);
};

export default handler;
