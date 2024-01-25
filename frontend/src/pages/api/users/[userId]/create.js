import { createUser } from 'wine-gallery-v2/backend/database/firebase';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        try {
            const user = await createUser(email, password);
            res.status(201).json(user);
        } catch (error) {
            console.error('Error during user creation:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};