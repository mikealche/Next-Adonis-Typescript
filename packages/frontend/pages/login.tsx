import Head from "next/head";
import styles from "../styles/Home.module.css";
import { routes, authenticateAPI } from "@template/shared";
import Cookies from "js-cookie";
import { useAuth } from "../contexts/auth";
import { useRouter } from "next/router";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  const { authenticate } = useAuth();
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      email: { value: email },
      password: { value: password },
    } = e.target.elements;
    const { data: token } = await routes.login.request({ email, password });
    await authenticate(token.token);
    router.push("/dashboard");
  };

  return (
    <MainLayout>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <p>Email</p>
        <input type="email" name="email" />
        <p>Password</p>
        <input type="password" name="password" />
        <div>
          <button className="btn btn-info"> Submit </button>
        </div>
      </form>
    </MainLayout>
  );
}
