import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Link,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { fredokaFont } from "@/helpers/font";

const navLinks = [
  { title: "About Me", url: "#about" },
  { title: "Blog", url: "#blog" },
  { title: "Projects", url: "#projects" },
  { title: "Contact", url: "#contact" },
];

const MotionBox = motion.create(Box as any);
const MotionFlex = motion.create(Flex as any);

const Navbar = ({ canHide = true, isMobile = false }) => {
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
      position="fixed"
      top={0}
      zIndex={100}
      bg={bgColor}
      boxShadow="sm"
      display={canHide ? { base: "none", lg: "block" } : "block"}
      roundedBottom={"lg"}
    >
      <Container maxW="container.xl">
        <MotionFlex
          justify="center"
          align="center"
          py={4}
          pt={isMobile ? 16 : 4}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Flex
            as="ul"
            listStyleType="none"
            gap={8}
            flexDir={isMobile ? "column" : "row"}
          >
            {navLinks.map((navLink) => (
              <Box as="li" key={navLink.url}>
                <Link
                  href={navLink.url}
                  className={fredokaFont.className}
                  fontWeight={500}
                  letterSpacing={"wider"}
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
