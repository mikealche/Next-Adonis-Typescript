import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../contexts/auth";
import MainLayout from "../layouts/MainLayout";

export default function dashboard() {
  const { user, isLoading } = useAuth();

  const router = useRouter();
  useEffect(() => {
    if (!user && !isLoading) router.push("/");
  }, [user, isLoading]);

  return <MainLayout>You're on the dashboard</MainLayout>;
}
