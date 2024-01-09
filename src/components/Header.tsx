import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUsers, removeUsers } from "../pages/login/UserSlice";
import { LOGO, USER_AVATAR } from "../utils/Constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store: any)=> store?.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
  const unsubscribe =   onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUsers({ uid: uid, email: email, displayName: displayName, photoURL: photoURL, })
        );
        navigate('/browse');
      } else {
        dispatch(removeUsers());
        navigate('/');
      }
    });
    // this will be called when component unmounts
    return ()=>unsubscribe();
  }, []);


  return (
    <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="netflix-logo"
      ></img>
      {user &&<div className="flex p-2 justify-between">
        <img
          className="w-10 h-10"
          src={USER_AVATAR}
          alt="profile-icon"
        />
        <button
          type="button"
          className="relative p-2 bg-black-50 h-10 w-auto font-bold text-white"
          onClick={handleSignOut}
        >
          {" "}
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
