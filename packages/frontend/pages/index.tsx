import Head from "next/head";
import styles from "../styles/Home.module.css";
import { routes, authenticateAPI } from "@template/shared";
import Cookies from "js-cookie";
import { useAuth } from "../contexts/auth";
import { useRouter } from "next/router";
import MainLayout from "../layouts/MainLayout";
import { useEffect } from "react";
export default function Home() {
  const { authenticate } = useAuth();
  const router = useRouter();
  useEffect(() => {
    router.push("/dashboard");
  }, []);

  return <MainLayout>"hola"</MainLayout>;
}
