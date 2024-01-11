import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { LOGO, USER_AVATAR, SUPPORTED_LANGUAGES } from "../utils/constants";
import { addUsers, removeUsers } from "../slices/userSlice";
import { toggleGptSearchView } from "../slices/gptSlice";
import { selectLanguage } from "../slices/appConfigSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store?.user);
  const showGptSearch = useSelector((store) => store?.gptSearch.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLangChange = (e) => {
    const lang = e.target.value;
    dispatch(selectLanguage(lang));
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUsers({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUsers());
        navigate("/");
      }
    });
    // this will be called when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="netflix-logo"></img>
      {user && (
        <div className="flex p-2 justify-between">
          {showGptSearch && (
            <select
              className="p-2 rounded-lg m-2 bg-gray-500 text-white"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => {
                return (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}
          <button
            className="py-2 px-4 m-2 mx-4 my-2 bg-gray-500 text-white rounded-lg"
            onClick={handleGPTSearchClick}
          >
           {!showGptSearch ?  'GPT Search' : 'HomePage'}
          </button>
          <img className="w-10 h-10" src={USER_AVATAR} alt="profile-icon" />
          <button
            type="button"
            className="relative p-2 bg-black-50 h-10 w-auto font-bold text-white"
            onClick={handleSignOut}
          >
            {" "}
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
