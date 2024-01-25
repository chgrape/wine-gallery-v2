import { updateUserProfile } from '/wine-gallery-v2/backend/database/firebase';

export default async (req, res) => {
    if (req.method === 'PUT') {
        const { userId } = req.query;
        const updatedData = req.body;

        try {
            await updateUserProfile(userId, updatedData);
            res.status(200).json({ message: 'User updated successfully' });
        } catch (error) {
            console.error('Error during user update:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};