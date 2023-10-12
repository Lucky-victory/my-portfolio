"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/app/components/Hero";
import Link from "next/link";
import SectionTitle from "./components/SectionTitle";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useSmoothScrollAndURLUpdate, useTheme } from "@/helpers/hooks";
import Blog from "./components/Blog";
import Loader from "./components/Loader";

export default function Home() {
  const { setTheme, activeColor } = useTheme("orange", 500);


  return (
    <>
      <Loader />
    <main className={styles.main}>
      <Hero setTheme={setTheme} activeColor={activeColor} />
      <Blog />
      <Projects />
      <Contact />
    </main>
    </>
  );
}
