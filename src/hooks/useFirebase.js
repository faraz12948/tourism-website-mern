import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut ,createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase=()=>{
    const [user,setUser] = useState({});
    
    const [isLoading,setIsLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    console.log(user)
    const signInusingGoogle = () =>{
        setIsLoading(true)
        
        return signInWithPopup(auth, googleProvider)
        
        


    }
    const logOut = () =>{
        setIsLoading(true)
          signOut(auth)
          .then((res) => {
              // Sign-out successful.
              setUser({})
            //   setPass("")
            //   setName("")
            //   console.log(user)
              
              
              
            }).catch((error) => {
              
            });
            setIsLoading(false)
      }

      useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
            }
            setIsLoading(false)

        });
    }, [])

    
  
         
        
      
    
    









    return {
        user,
        setUser,
        signInusingGoogle,
        logOut,
        
        setIsLoading,
        isLoading,
    
        



        
    }
}
export default useFirebase;