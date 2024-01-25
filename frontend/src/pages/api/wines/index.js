import { getWines, createWine } from '../../../../../backend/database/firebase';

export default async (req, res) => {
    if (req.method === 'GET') {
        try {
            const wines = await getWines();
            res.status(200).json(wines);
        } catch (error) {
            console.error('Error during wines retrieval:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }else if (req.method === 'POST') {
        const wineData = req.body;

        try {
            const wineId = await createWine(wineData);
            res.status(201).json({ wineId });
        } catch (error) {
            console.error('Error during wine creation:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }  else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};