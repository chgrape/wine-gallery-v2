import { getWineById } from '../../../../../../backend/database/firebase';


export default async (req, res) => {
    const { wineId } = req.query;

    try {
        const wine = await getWineById(wineId);
        if (!wine) {
            return res.status(404).json({ error: 'Wine not found' });
        }

        res.status(200).json(wine);
    } catch (error) {
        console.error('Error during wine retrieval:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
