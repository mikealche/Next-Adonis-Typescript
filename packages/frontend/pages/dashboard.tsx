import React from "react";
import { useAuth } from "../contexts/auth";

export default function dashboard() {
  const { user } = useAuth();
  if (!user) return <>asd</>;
  return <div>You're on the dashboard, {user.email}</div>;
}
