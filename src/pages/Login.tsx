import { useState, useRef, FormEvent } from "react";
import { Header }from "../components";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { IErrorMessage } from "../interfaces/interface";
import { useDispatch } from "react-redux";
import { addUsers } from "../slices/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState<Boolean>(true);
  const [errorMessage, setIsErrorMessage] = useState<String | null>("");

  const dispatch = useDispatch();

  const email = useRef<any>(null);
  const password = useRef<any>(null);
  const name = useRef<any>(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidData(email.current?.value, password.current.value);
    setIsErrorMessage(message);
    if (message) return;
    else {
      if (!isSignInForm) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
            }).then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUsers({uid: uid, email: email, displayName: displayName, photoURL: USER_AVATAR} ));

            }).catch((error: IErrorMessage) => {
              // An error occurred
              // ...
            });
            
          })
          .catch((error: IErrorMessage) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setIsErrorMessage(errorMessage);
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
          })
          .catch((error: IErrorMessage) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setIsErrorMessage(errorMessage);
          });
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
        className="w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/15a8acb9-e25c-45a7-b58d-b043b3fec84c/NL-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix_bg"
        />
      </div>
      <div className="flex justify-center mx-auto">
        <form
          onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
          className="w-3/12 absolute my-36 p-12 bg-black text-white rounded-lg bg-opacity-80"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? " Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              ref = {name}
              placeholder="Full Name"
              className="p-4 my-4 bg-gray-700 w-full rounded-lg"
            />
          )}

          <input
            type="text"
            placeholder="Email Address"
            ref={email}
            className="p-4 my-4 bg-gray-700 w-full rounded-lg"
          />

          <input
            type="text"
            placeholder="Password"
            ref={password}
            className="p-4 my-4 bg-gray-700 w-full rounded-lg"
          />
          <p className="text-red-500">{errorMessage}</p>
          <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignInForm ? " Sign In" : "Sign Up"}
          </button>
          <p className="font-bold cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already a member Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
