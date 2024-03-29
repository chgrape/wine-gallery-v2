import { updateUserProfile } from '../../../../../backend/database/firebase';

export default async (req, res) => {
    if (req.method === 'PUT') {
        const updatedData = req.body;
        try {
            await updateUserProfile(updatedData);
            res.status(200).json({ message: 'User updated successfully' });
        } catch (error) {
            console.error('Error during user update:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};