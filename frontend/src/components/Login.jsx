import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import { toast } from "react-toastify";
import { loginSchema } from "../validations/Login";

const Loginform = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const firebase = useFirebase();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const isValid = await loginSchema.isValid({
      email,
      password,
    });

    if (!isValid) {
      return toast.error("Details are not valid!!");
    }
    // firebase login
    try {
      const result = await firebase.signinUserWithEmailAndPass(email, password);
      console.log(result);
      toast.success("Login Successfully");
    } catch (error) {
      const errorText = error.code.split("/")[1];
      toast.error(errorText);
      console.log("error in signin page", error.message);
    }

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <>
      <div
        className="col-md-10 mx-auto col-lg-5 reg-form-section"
        style={{ width: "35%", marginTop: "4rem" }}
      >
        <form
          className="p-4 p-md-5 border rounded-3 bg-body-tertiary"
          onSubmit={handleSubmit}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h2 style={{ opacity: "0.8", fontWeight: "700" }}>Login</h2>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingUsername"
              placeholder="logan@gmail.com"
              ref={emailRef}
            />
            <label htmlFor="floatingInput" style={{ color: "grey" }}>
              Email
            </label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              ref={passwordRef}
            />
            <label htmlFor="floatingPassword" style={{ color: "grey" }}>
              Password
            </label>
          </div>
          <small className="text-body-secondary reg-anchor">
            <Link to="/register">Don't have an account?</Link>
          </small>

          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            style={{ marginTop: "0.5rem" }}
            // disabled={loading}
          >
            Login
          </button>
          <hr className="my-4" />
          <small className="text-body-secondary">
            By clicking Login, you agree to the
            <spam className="terms-link"> Terms of Service </spam> &
            <spam className="terms-link">Privacy Policy</spam>
          </small>
        </form>
      </div>
    </>
  );
};

export default Loginform;
