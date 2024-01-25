import { updateWine } from '/wine-gallery-v2/backend/database/firebase';

export default async (req, res) => {
    if (req.method === 'PUT') {
        const { wineId } = req.query;
        const updatedData = req.body;

        try {
            await updateWine(wineId, updatedData);
            res.status(200).json({ message: 'Wine updated successfully' });
        } catch (error) {
            console.error('Error during wine update:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};