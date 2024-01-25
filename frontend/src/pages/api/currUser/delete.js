import { deleteUserProfile } from '../../../../../backend/database/firebase';

export default async (req, res) => {
    if (req.method === 'DELETE') {
        try {
            await deleteUserProfile();
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            console.error('Error during user deletion:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};
