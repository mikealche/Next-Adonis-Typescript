import Head from "next/head";
import styles from "../styles/Home.module.css";
import { routes, authenticateAPI } from "@template/shared";
import Cookies from "js-cookie";

export default function Home() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
    } = e.target.elements;
    const { data: token } = await routes.signup.request({ email, password });
    authenticateAPI(token.token);
    Cookies.set("token", token.token);
    try {
      const { data: user } = await routes.me.request();
      console.log({ user });
    } catch (e) {
      console.log({ e });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup</h1>
      <p>Email</p>
      <input type="email" name="email" id="" />
      <p>Password</p>
      <input type="password" name="password" id="" />
      <div>
        <button> Submit </button>
      </div>
    </form>
  );
}
