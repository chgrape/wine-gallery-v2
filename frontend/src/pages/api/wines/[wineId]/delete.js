import { deleteWine } from '/wine-gallery-v2/backend/database/firebase';

export default async (req, res) => {
    if (req.method === 'DELETE') {
        const { wineId } = req.query;

        try {
            await deleteWine(wineId);
            res.status(200).json({ message: 'Wine deleted successfully' });
        } catch (error) {
            console.error('Error during wine deletion:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};
