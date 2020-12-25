import React from "react";
import { useAuth } from "../contexts/auth";
import MainLayout from "../layouts/MainLayout";

export default function dashboard() {
  const { user } = useAuth();
  return <MainLayout>You're on the dashboard</MainLayout>;
}
