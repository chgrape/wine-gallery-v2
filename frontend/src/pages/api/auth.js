import { auth } from 'wine-gallery-v2/backend/database/firebase.js';

export default async (req, res) => {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        try {
            // Create a new user
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            const userId = userCredential.user.uid;

            res.status(201).json({ userId });
        } catch (error) {
            console.error('Error during user registration:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else if (req.method === 'GET') {
        // Example login route
        const { email, password } = req.body;

        try {
            // Sign in the user
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            const user = userCredential.user;

            res.status(200).json({ userId: user.uid, email: user.email });
        } catch (error) {
            console.error('Error during user login:', error);
            res.status(401).json({ error: 'Invalid username or password' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
};
