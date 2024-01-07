import { useState } from "react";
import  Header  from "../components/Header";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState<Boolean>(true);

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }
    
  return (
    <div>
      <Header/>
      <div className="absolute">
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/15a8acb9-e25c-45a7-b58d-b043b3fec84c/NL-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg'
      alt='netflix_bg'/>

      </div>
      <div className="flex justify-center mx-auto">
      <form className="w-3/12 absolute my-36 p-12 bg-black text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? ' Sign In' : 'Sign Up'}</h1>
       {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 bg-gray-700 w-full rounded-lg"/>}

        <input type="text" placeholder="Email Address" className="p-4 my-4 bg-gray-700 w-full rounded-lg"/>

        <input type="text" placeholder="Password" className="p-4 my-4 bg-gray-700 w-full rounded-lg"/>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? ' Sign In' : 'Sign Up'}</button>
        <p className="font-bold cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already a member Sign In Now'}</p>

      </form>
      </div>
    
    </div>
  );
};

export default Login;
