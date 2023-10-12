import { useSmoothScrollAndURLUpdate, useTheme } from "@/helpers/hooks";
import { Box, Button, Flex, Input, Stack,Link } from "@chakra-ui/react";
import { Fredoka } from "next/font/google";
import { usePathname } from "next/navigation";

import { useState, useRef, type MouseEvent, MouseEventHandler } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

// import Link from 'next/link'
const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const navLinks = [
  {
    title: "About Me",
    url: "/",
  },
  {
    title: "Blog",
    url: "#blog",
  },
  { title: "Projects", url: "#projects" },
  { title: "Contact", url: "#contact" },
];
const Navbar = ({
  setTheme,
  activeColor,
  canHide = true,
}: {
  setTheme: (color: string) => void;
  activeColor: string;
  canHide?: boolean;
}) => {
  const pathname = usePathname();
  // useSmoothScrollAndURLUpdate();

  const indicatorRef = useRef<HTMLDivElement | null>(null);

  function handleMouseOut(evt: any, isActive: boolean) {
    const navLink = evt.target;
    if (isActive) {
      navLink.style.background = "var(--primary-theme-color)";
    }
    if (indicatorRef.current) {
      const indicator = indicatorRef.current;
      indicator.style.width = `0`;
      indicator.style.height = `0`;
      indicator.style.top = `0`;
      // indicator.style.left= `0`
    }
  }
  function handleMouseMove(evt: any) {
    const navLink = evt.target;
    navLink.style.background = "none";
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
  };

  return (
    <Flex
      zIndex={12}
      maxW={{md:600,lg:1160}}
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
          const isActive = pathname === navLink.url;

          return (
            <Box key={"navlink" + i} as={"li"} zIndex={2}>
              <Link as={'a'}
                onMouseOver={handleMouseMove}
                onMouseOut={(evt) => handleMouseOut(evt, isActive)}
                bg={isActive ? "var(--primary-theme-color)" : ""}
                {...defaultNavLinkOpts}
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
          bg={"var(--primary-theme-color)"}
          zIndex={0}
        ></Box>
      </Flex>
      <ThemeSwitcher setTheme={setTheme} activeColor={activeColor} />
    </Flex>
  );
};

export default Navbar;
