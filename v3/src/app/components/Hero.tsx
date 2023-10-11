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

const Hero = ({
  setTheme,
  activeColor,
}: {
  setTheme: (color: string) => void;
  activeColor: string;
}) => {
  return (
    <Box pos={"relative"} minH={723} id="about" as="section">
      <Box
        pos={"absolute"}
        inset={0}
        bg={"var(--hero-bg-color)"}
        backdropFilter={"blur(50px)"}
      ></Box>
      <Box
        hideBelow={"lg"}
        minW={340}
        h={"full"}
        w={540}
        pos={"absolute"}
        right={0}
        top={0}
        bg={"var(--img-area-bg)"}
      >
      
      </Box>
      <Box pos={"relative"}>
        <Flex>
          <Navbar setTheme={setTheme} activeColor={activeColor} />

          <MobileNavbar setTheme={setTheme} activeColor={activeColor} />
        </Flex>

        <Flex
          pb={"2rem"}
          pt={"0rem"}
          px={{ base: "1rem", lg: "2rem" }}
          pos={"relative"}
          gap={"3rem"}
          wrap={"wrap-reverse"}
          mt={"2rem"}
          align={"center"}
          justify={{ base: "center" }}
          mx={"auto"}
          zIndex={4}
          // marginTop={'6rem'}
          maxW={{ base: 950, lg: 1100 }}
        >
          <Box
            px={{ lg: "2rem", base: "0.5rem" }}
            maxW={{ lg: 650, base: 480 }}
            minW={300}
            bg={""}
            flex={1}
          >
            <Flex gap={"0.5rem"} align={"center"}>
              <Box h={1} w={"3.62rem"} bg={"var(--primary-theme-color)"}></Box>
              <Text fontSize={"1.375rem"}>HELLO</Text>
            </Flex>
            <Heading
              mt={"0.5rem"}
              mb={"0.875rem"}
              className={fredoka.className}
              fontSize={"3.125rem"}
            >
              I&apos;m{" "}
              <Text as={"span"} color={"var(--primary-theme-color)"}>
                Lucky
              </Text>{" "}
              Victory
            </Heading>
            <Box fontSize={"1.05rem"}>
              <Text>
                A dedicated web developer with a profound passion for design
                aesthetics.
                <br />
                <br />
                <Text fontWeight={"semibold"} as={"strong"}>
                  Allow me to share a glimpse into my journey:
                </Text>
              </Text>
              <br />
              <Text lineHeight={""}>
                Approximately five years ago, my curiosity led me to dive into
                the intricacies of web development, with a specific focus on
                frontend technologies. What began as a mere hobby has since
                transformed into an unwavering passion, driving my commitment to
                this ever-evolving field.
                <br />
                <br />
                Today, I have embarked on a purposeful career path, ready to
                harness my skills and expertise to craft innovative applications
                that address genuine real-world challenges. Let&apos;s embark on
                this exciting journey together, where my dedication and
                proficiency in web development will bring your visions to life.
              </Text>
            </Box>
          </Box>

          <Box
            className="img-wrap" overflow={'hidden'}
            h={"33.125rem"}
            pos={"relative"}
            // ml={"-8.19rem"}
            // mt={"5.69rem"}
            bg={"var(--bg-color)"}
            maxW={"28.125rem"}
            w={"100%"}
            boxShadow={"15px 10px 15px rgba(0,0,0,0.25)"}
          >
            <Text as={'span'}></Text>
            <Text as={'span'}></Text>
            <Text as={'span'}></Text>
            <Text as={'span'}></Text>
            <Image
              alt=""
              w={"100%"}
              h="100%"
              objectFit={"cover"}
              src="/images/my-photo.png"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Hero;
