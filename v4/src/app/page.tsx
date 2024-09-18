"use client";
import styles from "./page.module.css";
import Hero from "@/app/components/Hero";

import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

export default function Home() {
  // const { setTheme, activeColor } = useTheme("orange", 50);

  return (
    <>
      {/* <Loader /> */}
      <main className={styles.main}>
        <Hero />
        <Blog />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
