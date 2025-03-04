import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/~"; //Correct for Named Export
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  // const Name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the Form data

    const message = checkValidData(
      email.current.value,
      password.current.value
      // Name.current.value
    );
    setErrorMessage(message);

    if (message) return;

    // sign in/signup logic

    if (!isSignInForm) {

      // sign Up logic


    } else {
      // sign in logic
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_medium.jpg"
          alt="background"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg  bg-opacity-80 "
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : " Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <p className="text-red-500 font-bold text-lg p-3">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full  rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : " Sign Up"}
        </button>
        <p className="py-4  cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? " New to Netflix? Sign Up Now"
            : " Already registered? Sign In Now.."}
        </p>
      </form>
    </div>
  );
};

export default Login;
