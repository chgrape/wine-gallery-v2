import { getWines } from '/wine-gallery-v2/backend/database/firebase';

export default async (req, res) => {
    if (req.method === 'GET') {
        try {
            const wines = await getWines();
            res.status(200).json(wines);
        } catch (error) {
            console.error('Error during wines retrieval:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};