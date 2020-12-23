import Head from "next/head";
import styles from "../styles/Home.module.css";
import { routes } from "@template/shared";

export default function Home() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
    } = e.target.elements;
    const token = await routes.signup.request({ email, password });
    console.log({ token });
    console.log({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
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
