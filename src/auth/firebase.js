import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"


//* Your web app's Firebase configuration
// TODO: Replace the following with your app's Firebase project configuration
//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
const firebaseConfig = {
    apiKey: "AIzaSyBBJ-96g6_OgXKD0E0eJoqodiHmjWeLGNw",
    authDomain: "movie-app-2004f.firebaseapp.com",
    projectId: "movie-app-2004f",
    storageBucket: "movie-app-2004f.appspot.com",
    messagingSenderId: "415827561937",
    appId: "1:415827561937:web:ba01dd7051fcbcb69f24f0",
    measurementId: "G-2C4XNNK377"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)

export const createUser = async (email, password, navigate) => {
    //? yeni bir kullanıcı oluşturmak için kullanılan firebase metodu
    try {
        let userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        navigate("/");
        console.log(userCredential);
    } catch (error) {
        alert(error.message);
    }
};

//* https://console.firebase.google.com/
//* => Authentication => sign-in-method => enable Email/password
//! Email/password ile girişi enable yap
export const signIn = async (email, password, navigate) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
    } catch (error) {
        alert(error.message);
    }
};


export const userObserver = () => {
    //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak dönen firebase metodu
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user);
        } else {
            console.log("user signed out");
        }
    });
};

export const logout = () => {
    signOut(auth)
}