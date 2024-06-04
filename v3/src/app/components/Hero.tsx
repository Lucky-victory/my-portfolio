import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  // Link,
} from "@chakra-ui/react";
import { Fredoka } from "next/font/google";
import Navbar from "./Navbar";
import { useTheme } from "@/helpers/hooks";
import MobileNavbar from "./MobileNavbar";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Hero = ({}: {}) => {
  return (
    <Box pos={"relative"} id="about" as="section">
      <Box
        pos={"absolute"}
        inset={0}
        bg={"var(--primary-theme-color)"}
        backdropFilter={"blur(50px)"}
      ></Box>
      {/* <Box
        hideBelow={"lg"}
        minW={340}
        h={"full"}
        w={540}
        pos={"absolute"}
        right={0}
        top={0}
      ></Box> */}
      <Box pos={"relative"}>
        <Flex>
          <Navbar />

          <MobileNavbar />
        </Flex>

        <Flex
          pb={{ base: "2rem", md: "0" }}
          pt={"0rem"}
          px={{ base: "1rem", lg: "2rem" }}
          pos={"relative"}
          gap={"3rem"}
          wrap={"wrap"}
          mt={"2rem"}
          align={"center"}
          justify={{ base: "center" }}
          mx={"auto"}
          zIndex={4}
          // marginTop={'6rem'}
          maxW={{ base: 950, lg: 1100 }}
        >
          <Box
            bg={"#d9d9d9"}
            p={5}
            roundedTop={"full"}
            roundedBottomEnd={{ base: "full", md: "none" }}
          >
            <Box
              className="img-wrap"
              overflow={"hidden"}
              h={{ lg: "25.125rem", base: "20rem" }}
              rounded={"full"}
              pos={"relative"}
              w={{ lg: "25.125rem", base: "20rem" }}
            >
              <Image
                alt=""
                w={"100%"}
                objectPosition={"top"}
                h="100%"
                objectFit={"cover"}
                src="/images/me.jpg"
              />
            </Box>
          </Box>
          <Box
            px={{ lg: "2rem", base: "0.5rem" }}
            maxW={{ lg: 650, base: 500 }}
            minW={300}
            flex={1}
            color={"white"}
          >
            <Flex gap={"0.5rem"} align={"center"}>
              <Box h={1} w={"3.62rem"} bg={"var(--bg-color)"}></Box>
              <Text fontSize={"1.375rem"} textTransform={"capitalize"}>
                Hi there
              </Text>
            </Flex>
            <Heading
              mt={"0.5rem"}
              mb={"0.875rem"}
              className={fredoka.className}
              fontSize={"3.125rem"}
            >
              I&apos;m <Text as={"span"}>Lucky</Text> Victory
            </Heading>
            <Box fontSize={"1.05rem"}>
              <Text>
                A web developer with a focus on delivering significant results,
                eager to tackle a variety of challenges and employ creativity to
                craft user-centric interfaces. Bringing proficiency in project
                management, resolving user-centric issues, and promoting
                collaborative teamwork. Skilled in leveraging innovative tools
                and methodologies to streamline workflows and enhance user
                satisfaction.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
