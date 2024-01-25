import { getUserById } from '/wine-gallery-v2/backend/database/firebase';

export default async (req, res) => {
    const { userId } = req.query;

    try {
        const user = getUserById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Error during user retrieval:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
