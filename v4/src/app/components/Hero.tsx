import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Container,
  VStack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { fredokaFont } from "@/helpers/font";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const MotionBox = motion.create(Box as any);
const MotionFlex = motion.create(Flex as any);
const MotionImage = motion.create(Image as any);

const Hero = () => {
  const bgColor = useColorModeValue("blue.100", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("blue.500", "blue.300");

  return (
    <Box
      pos="relative"
      id="about"
      roundedBottom={"lg"}
      as="section"
      bg={bgColor}
      overflow="hidden"
    >
      <Container maxW="container.xl" px={4}>
        <Flex>
          <Navbar />
          <MobileNavbar />
        </Flex>

        <MotionFlex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          py={20}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <MotionBox
            flex={1}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <VStack align="flex-start" spacing={6}>
              <HStack>
                <Box h={1} w={14} bg={accentColor} rounded="full" />
                <Text fontSize="xl" fontWeight="medium" color={accentColor}>
                  Hi there
                </Text>
              </HStack>
              <Heading
                className={fredokaFont.className}
                fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
                color={textColor}
                lineHeight="shorter"
              >
                I&apos;m{" "}
                <Text as="span" color={accentColor}>
                  Lucky
                </Text>{" "}
                Victory
              </Heading>
              <Text fontSize="xl" color={textColor} maxW={"500px"}>
                A web developer focused on delivering impactful results,
                crafting user-centric interfaces, and driving innovation in
                project management and team collaboration.
              </Text>
            </VStack>
          </MotionBox>

          <MotionBox
            flex={1}
            mt={{ base: 12, md: 0 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <MotionImage
              src="/images/me.jpeg"
              alt="Lucky Victory"
              objectFit="cover"
              w="full"
              h={{ base: "350px", md: "450px" }}
              rounded={{ base: "full", md: "3xl" }}
              shadow="2xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            />
          </MotionBox>
        </MotionFlex>
      </Container>
    </Box>
  );
};

export default Hero;
