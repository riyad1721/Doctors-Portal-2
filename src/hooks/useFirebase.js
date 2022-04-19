import initializeFirebase from "../page/Login/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

//initialize Firebase for firebase.init.js file
initializeFirebase();

const useFirebase = () => {

    const [user, setUser] = useState({});

    const auth = getAuth();

    // RegisterUser function

    const registerUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }

    // onAuthStateChanged using useEffect because it observe user state if use logout it counting useEffect

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setUser(user);

            } else {
                setUser({});
            }
        });
        return () => unsubscribed;
    }, [])


    // Logout User function here

    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return {
        user,
        registerUser,
    }

}
export default useFirebase;