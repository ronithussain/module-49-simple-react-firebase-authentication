import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";
import { useState } from "react";



const Login = () => {
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignin = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error => {
            console.log('ERROR',error)
            setUser(null)
        })  
    }
    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log('sign out done')
            setUser(null)
        })
        .catch((error) => console.log(error))
    }
    const handleGithubSignIn =() => {
        signInWithPopup(auth, githubProvider)
        .then((result)=> {
            console.log(result.user)
            setUser(result.user)
        })
        .catch((error) => {
            console.log('ERROR',error)
        })
    }

    //conditionally button use
    return (
        <div>
            {/* <button onClick={handleGoogleSignin}>Login with google</button>
            <button onClick={handleSignOut}>Sign Out</button> */}
            {
                user ?
                <button onClick={handleSignOut}>Sign Out</button>
                :
                <>
                <button onClick={handleGoogleSignin}>Login with google</button>
                <button onClick={handleGithubSignIn}>Login with github</button>
                </>
            }
            {
                user && 
                <div>
                    <h3>{user.displayName}</h3>
                    <h5>Email: {user.email}</h5>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;