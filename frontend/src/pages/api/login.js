import { loginUser } from 'wine-gallery-v2/backend/database/firebase.js';


export default async (req, res) => {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        try {
            const userCredential = await loginUser(email, password);
            const user = userCredential.user;

            res.status(200).json({ userId: user.id, email: user.email });
        } catch (error) {
            console.error('Error during user login:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};

