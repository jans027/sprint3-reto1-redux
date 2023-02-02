
import "../Global.css"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import {  TextIntro, Singupfrm, Form, Label, Input1, InputContainer, ButtonIntro1 } from '../styles/PagIntro'
import logogoogle from '../images/logogoogle.png'
import logofb from '../images/logofb.png'
import portada from '../images/portada.png'
// import Image from '../styles/PagIntro'
import { DivLogos, DivPortada, Seccion1 } from "../styles/Styles1";
import { useAuth } from "../context/AuthContext";
// import NavBar from "../components/NavBar";





export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle, resetPassword, singInWithFacebook } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/home2");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/home2");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFacebookSignin = async () => {
    try {
      await singInWithFacebook();
      navigate("/home2");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!user.email) return setError("Write an email to reset password");
    try {
      await resetPassword(user.email);
      setError('We sent you an email. Check your inbox')
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <seccion>
      <div className="col-12" >
        <Seccion1>

          {error && <Alert message={error} />}

          <div className="col-12" Style="margin-top:-100px">
            <DivPortada className="row">
              <img Style="height:450px; width:450px;" src={portada} alt="" />
            </DivPortada>
          </div>


          <div className="col-12" >
            <div className="container" Style="text-align:center">
              <TextIntro>
                <div className="col-12">

                  <h2>Welcome back</h2>
                </div>
                <div className="col-12">
                  <h5>Sing in to an existing account using your Email</h5>
                </div>
              </TextIntro>
            </div>
          </div>


          <div className="col-12">
            <div className="row">
              <Singupfrm>
                <Form onSubmit={handleSubmit}>
                  <InputContainer className="mb-3 mt-3">
                    <Label htmlFor="email">Email</Label>
                    <Input1 type="email" name="email" onChange={handleChange} placeholder="youremail@gmail.com" />
                  </InputContainer>
                  <InputContainer className="mb-2">
                    <Label htmlFor="password">Password</Label>
                    <Input1 type="password" name="password" onChange={handleChange}
                      placeholder="*************" />
                  </InputContainer>

                </Form>
              </Singupfrm>
            </div>
          </div>

          <div className="col-12">
            <div className="row">
              <div className="container" Style="text-align: center;">
                <ButtonIntro1 type="submit" >
                  Sign In
                </ButtonIntro1>
              </div>
            </div>
          </div>

          <div className="col-12  mt-2">
            <div className="container" Style="text-align:center">
              <a href="#!" Style="font-weight:400; font-size:12px;" onClick={handleResetPassword}>
                Forgot Password?
              </a>
            </div>
          </div>

          <div className="col-12">
            <div className="container" Style="text-align:center; margin-top:50px; font-size:20px">
              <h1>Sing In With</h1>
            </div>
          </div>

          <div className="col-12">
            <div className="row" Style="text-align:center;">
              <DivLogos className="container d-flex">
                <div className="col-6">
                  <button onClick={handleFacebookSignin}>
                    <img Style="height:60px; width:60px;" src={logofb} alt="" />
                  </button>
                </div>
                <div className="col-6">
                  <button onClick={handleGoogleSignin}>
                    <img Style="height:60px; width:60px;" src={logogoogle} alt="" />
                  </button>
                </div>
              </DivLogos>
            </div>
          </div>


          <div className="col-12">
            <div className="container" Style="margin-top:40px; font-weight:400; font-size:14px; text-align:center;">
              Dont have account?
              <Link to="/singup" Style="color:#2BE7E8; margin-left:10px;">
                Sing up
              </Link>
            </div>
          </div>

        </Seccion1>
      </div>
    </seccion>

  );
}