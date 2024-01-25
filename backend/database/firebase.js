// path/to/your/firebase.js
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    updateEmail,
    updatePassword,
    deleteUser as deleteAccount,
    signOut,
} from 'firebase/auth';


import { initializeApp } from 'firebase/app'

import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDvZoAiVWpOMhk_WvwGyNCEYIbxOdaAjlo",
    authDomain: "wine-gallery-84aa1.firebaseapp.com",
    databaseURL: "https://wine-gallery-84aa1-default-rtdb.firebaseio.com",
    projectId: "wine-gallery-84aa1",
    storageBucket: "wine-gallery-84aa1.appspot.com",
    messagingSenderId: "578250409828",
    appId: "1:578250409828:web:03a229040cfa06d7795c71",
    measurementId: "G-HML5QMKC6M"
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

export const getUser = () => {
    const user = auth.currentUser;
    return user ? { userId: user.uid, email: user.email } : null;
};

export const updateUserProfile = async (updatedData) => {
    try {
        await updateProfile(auth.currentUser, updatedData);
    } catch (error) {
        throw error;
    }
};

export const updateEmailForUser = async (newEmail) => {
    try {
        await updateEmail(auth.currentUser, newEmail);
    } catch (error) {
        throw error;
    }
};

export const updatePasswordForUser = async (newPassword) => {
    try {
        await updatePassword(auth.currentUser, newPassword);
    } catch (error) {
        throw error;
    }
};


export const deleteUserProfile = async () => {
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
