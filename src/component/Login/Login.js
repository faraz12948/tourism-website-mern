
import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {
        user,
        setUser,
        signInusingGoogle,
        logOut,
        setPass,
        setIsLoading,
        isLoading,
        name,
        setName,
    } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

   





    const googleSignInHandler = () =>{
        
        
        signInusingGoogle()
        .then(result =>{
            // setUser(result.user)
           
           history.push(redirect_uri)
          
           
 
       })
       .finally(
         ()=>{ setIsLoading(false)}
       )
  
    }
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <div className='rounded' style={{ backgroundColor: 'rgb(221, 221, 221)' , padding:'10%', width:'60%', marginTop:'80px'}}>
            <h3 className='text-success'><span ><i class="fab fa-google"></i></span>oogle SignUp </h3>
            <p>Sign up here to continue</p>
             <Button className='my-5' variant="danger" type="submit" onClick={googleSignInHandler}>
                Google SignUp
            </Button>
            
        </div>
        </div>
    );
};

export default Login;