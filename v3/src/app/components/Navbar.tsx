import { Box, Flex, Link } from "@chakra-ui/react";
import { Fredoka } from "next/font/google";

import { useState, useRef, useEffect } from "react";

// import Link from 'next/link'
const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const navLinks = [
  {
    title: "About Me",
    url: "#about",
  },
  {
    title: "Blog",
    url: "#blog",
  },
  { title: "Projects", url: "#projects" },
  { title: "Contact", url: "#contact" },
];
const Navbar = ({ canHide = true }: { canHide?: boolean }) => {
  const [hash, setHash] = useState("");
  const [activeNav, setActiveNav] = useState("#about");

  console.log({ hash });
  useEffect(() => {
    setActiveNav(hash);
  }, [hash]);

  useEffect(() => {
    window.location.hash = "#about";
    // Function to get the current hash
    const getHash = () => {
      setHash(window.location.hash);
    };

    // Get the initial hash
    getHash();

    // Add an event listener for hash changes
    window.addEventListener("hashchange", getHash);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", getHash);
    };
  }, []);
  const handleClick = (evt: any) => {
    const navLink = evt.target;
    setHash(navLink.getAttribute("href"));
    setActiveNav(navLink.getAttribute("href"));
  };
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  function handleMouseOut(evt: any, isActive: boolean) {
    const navLink = evt.target;
    // const active = hash === navLink.href || activeNav === navLink.href;
    if (isActive) {
      navLink.style.background = "var(--bg-color)";
      navLink.style.color = "var(--primary-theme-color)";
    } else if (indicatorRef.current && !isActive) {
      navLink.style.background = "none";
      navLink.style.color = "var(--bg-color)";
    }
    if (indicatorRef.current) {
      const indicator = indicatorRef.current;
      indicator.style.width = `0`;
      indicator.style.height = `0`;
      indicator.style.top = `0`;
      // navLink.style.color = "var(--primary-theme-color)";
      // indicator.style.left= `0`
    }
  }
  function handleMouseMove(evt: any, isActive: boolean) {
    const navLink = evt.target;
    // if (!isActive) {
    //   navLink.style.background = "none";
    //   navLink.style.color = "var(--bg-color)";
    // }
    if (indicatorRef.current) {
      const indicator = indicatorRef.current;
      indicator.style.width = navLink.offsetWidth + "px";
      indicator.style.height = navLink.offsetHeight + "px";
      indicator.style.top = navLink.offsetTop + "px";
      indicator.style.left = navLink.offsetLeft + "px";
    }
  }
  const defaultNavLinkOpts = {
    // variant: "unstyled",
    pb: "0.5rem",
    pt: "1.75rem",
    h: "auto",
    className: fredoka.className,
    fontWeight: 600,
    fontSize: "1.12rem",
    letterSpacing: "0.5px",
    px: "1.5rem",
    textDecor: "none!important",
    borderRadius: "none",
    display: "block",
    w: { base: "full" },
    color: "white",
    _hover: { color: "var(--primary-theme-color)" },
  };

  return (
    <Flex
      zIndex={12}
      maxW={{ md: 600, lg: 1160 }}
      ml={"auto"}
      hideBelow={canHide ? "lg" : undefined}
      justify={"space-between"}
      align={"center"}
      wrap={{ lg: "nowrap", base: "wrap" }}
      pr={{ lg: "2rem", base: 4 }}
      gap={{ base: 8 }}
      w={"full"}
    >
      <Flex
        as={"ul"}
        pl={"0"}
        listStyleType={"none"}
        gap={"1rem"}
        className="navbar"
        // bg={'blue'}
        mb={{ base: 6, lg: 0 }}
        direction={{ lg: "row", base: "column" }}
        pos={"relative"}
        // w={'full'}
      >
        {navLinks.map((navLink, i) => {
          const isActive = hash === navLink.url;
          return (
            <Box key={"navlink" + i} as={"li"} zIndex={2}>
              <Link
                as={"a"}
                // onClick={handleClick}
                onMouseOver={(evt) => handleMouseMove(evt, isActive)}
                onMouseOut={(evt) => handleMouseOut(evt, isActive)}
                {...defaultNavLinkOpts}
                color={isActive ? "var(--primary-theme-color)" : "white"}
                bg={isActive ? "var(--bg-color)" : "transparent"}
                href={navLink.url}
              >
                {navLink.title}
              </Link>
            </Box>
          );
        })}
        <Box
          className="indicator"
          ref={indicatorRef}
          pos={"absolute"}
          top={0}
          left={0}
          transition={"0.3s"}
          bg={"var(--bg-color)"}
          zIndex={0}
        ></Box>
      </Flex>
      {/* <ThemeSwitcher setTheme={setTheme} activeColor={activeColor} /> */}
    </Flex>
  );
};

export default Navbar;
