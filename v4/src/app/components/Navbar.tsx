import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Link,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const navLinks = [
  { title: "About Me", url: "#about" },
  { title: "Blog", url: "#blog" },
  { title: "Projects", url: "#projects" },
  { title: "Contact", url: "#contact" },
];

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const Navbar = ({ canHide = true }) => {
  const [activeNav, setActiveNav] = useState("#about");
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const hoverColor = useColorModeValue("blue.500", "blue.300");

  useEffect(() => {
    const handleHashChange = () => setActiveNav(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex={100}
      bg={bgColor}
      boxShadow="sm"
      display={canHide ? { base: "none", lg: "block" } : "block"}
    >
      <Container maxW="container.xl">
        <MotionFlex
          justify="center"
          align="center"
          py={4}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Flex as="ul" listStyleType="none" gap={8}>
            {navLinks.map((navLink) => (
              <Box as="li" key={navLink.url}>
                <Link
                  href={navLink.url}
                  className={fredoka.className}
                  fontWeight={600}
                  fontSize="lg"
                  color={activeNav === navLink.url ? hoverColor : textColor}
                  position="relative"
                  _hover={{ color: hoverColor }}
                  transition="color 0.3s"
                >
                  {navLink.title}
                  <AnimatePresence>
                    {activeNav === navLink.url && (
                      <MotionBox
                        as="span"
                        position="absolute"
                        bottom="-2px"
                        left={0}
                        right={0}
                        height="2px"
                        bg={hoverColor}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        exit={{ scaleX: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                </Link>
              </Box>
            ))}
          </Flex>
        </MotionFlex>
      </Container>
    </Box>
  );
};

export default Navbar;
