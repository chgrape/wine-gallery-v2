// path/to/your/firebase.js
import {
    initializeApp,
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    sendPasswordResetEmail,
    updateEmail,
    updatePassword,
    sendEmailVerification,
    deleteUser as deleteAccount,
    signOut,
} from 'firebase/auth';

import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);

// Wine CRUD operations
export const createWine = async (wineData) => {
    try {
        const wineRef = await addDoc(collection(firestore, 'wines'), wineData);
        return wineRef.id;
    } catch (error) {
        throw error;
    }
};

export const getWines = async () => {
    try {
        const querySnapshot = await getDocs(collection(firestore, 'wines'));
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        throw error;
    }
};

export const getWineById = async (wineId) => doc(firestore, 'wines', wineId);

export const updateWine = async (wineId, updatedData) => {
    try {
        await updateDoc(getWineById(wineId), updatedData);
    } catch (error) {
        throw error;
    }
};

export const deleteWine = async (wineId) => {
    try {
        await deleteDoc(getWineById(wineId));
    } catch (error) {
        throw error;
    }
};

// User CRUD operations
export const createUser = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        return { userId: user.uid, email: user.email };
    } catch (error) {
        throw error;
    }
};

export const getUserById = (userId) => {
    const user = auth.currentUser;
    return user ? { userId: user.uid, email: user.email } : null;
};

export const updateUserProfile = async (userId, updatedData) => {
    try {
        await updateProfile(auth.currentUser, updatedData);
    } catch (error) {
        throw error;
    }
};

export const updateEmailForUser = async (userId, newEmail) => {
    try {
        await updateEmail(auth.currentUser, newEmail);
    } catch (error) {
        throw error;
    }
};

export const updatePasswordForUser = async (userId, newPassword) => {
    try {
        await updatePassword(auth.currentUser, newPassword);
    } catch (error) {
        throw error;
    }
};


export const deleteUserProfile = async (userId) => {
    try {
        await deleteAccount(auth.currentUser);
    } catch (error) {
        throw error;
    }
};

export const signOutUser = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        throw error;
    }
};
