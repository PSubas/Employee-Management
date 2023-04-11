import React from "react";
import { Inter } from "next/font/google";
import Dashboard from "@/Dashboard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return <Dashboard />;
}
