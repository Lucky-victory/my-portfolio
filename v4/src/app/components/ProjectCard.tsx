import {
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  Box,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion"; // Adding motion for animations
import ChromeIcon from "./icons/ChromeIcon";
import GithubIcon from "./icons/GithubIcon";
import CustomButton from "./CustomButton";
import { fredokaFont } from "@/helpers/font";

const MotionBox = motion(Box);

const projects = [
  {
    title: "Pontis",
    tools: [
      "NextJS",
      "Typescript",
      "Wagmi",
      "Chakra UI",
      "Redux Toolkit",
      "RainbowKit",
    ],
    desc: "Pontis is an innovative decentralized application (DApp) that redefines the NFT landscape by combining bridging, minting, and swapping functionalities into a single, user-friendly platform.",
    git: "https://github.com/Lucky-victory/pontis-frontend",
    live: "https://pontis-dapp.vercel.app",
    cover: "/images/pontis.png",
  },
  {
    title: "Recipto",
    tools: [
      "React",
      "Framework7",
      "Javascript",
      "SCSS",
      "Appwrite",
      "Redux Toolkit",
    ],
    desc: "Recipto is a user-friendly recipe-sharing platform that allows passionate home cooks and food enthusiasts to effortlessly share their culinary masterpieces, from mouthwatering appetizers to delectable desserts, inspiring others to embark on their own delightful cooking journeys.",
    git: "https://github.com/lucky-victory/recipto",
    live: "https://recipto.vercel.app",
    cover: "/images/recipto.png",
  },
  {
    title: "Donare",
    tools: [
      "NextJS",
      "Typescript",
      "Wagmi",
      "Headless UI",
      "TailwindCSS",
      "RainbowKit",
    ],
    desc: `Donare enables trustworthy individuals to gather resources for pressing concerns and fund grants. Donare's reach isn't confined to a single blockchain; it's accessible to users across various EVM chains.`,
    git: "https://github.com/Lucky-victory/donare-frontend",
    live: "https://donare-dapp.vercel.app",
    cover: "/images/donare.png",
  },
  {
    title: "My Portfolio",
    tools: ["Typescript", "NextJS", "Chakra UI", "Resend"],
    desc: "My portfolio website serves as a creative canvas where I showcase my diverse range of projects, skills, and experiences. With an intuitive design and seamless navigation, it offers visitors a glimpse into my journey as a passionate creator.",
    git: "https://github.com/lucky-victory/my-portfolio",
    live: "https://lucky-victory.dev",
    cover: "/images/portfolio.png",
  },
  {
    title: "HackHost",
    tools: [
      "Typescript",
      "NextJS",
      "Chakra UI",
      "TiDB",
      "Redux Toolkit",
      "Prisma",
    ],
    desc: "HackHost is an open-source platform that simplifies hackathon hosting. It offers a user-friendly interface built with chakra-ui, Next.js, Prisma, and TiDB Serverless. ",
    git: "https://github.com/lucky-victory/hackhost",
    live: "https://hackhost-alpha.vercel.app",
    cover: "/images/hackhost.png",
  },
  {
    title: "Rejuvenate AI",
    tools: ["Typescript", "NextJS", "Chakra UI", "TailwindCSS"],
    desc: "A decentralized web app at the forefront of healthy living. We want to build healthy communities all around the world, we want these communities to form green zones in their regions, ",
    git: "https://github.com/Lucky-victory/rejuvenate",
    live: "https://rejuvenate-ai.netlify.app/",
    cover: "/images/rejuvenate.png",
  },
];

const ProjectCard = () => {
  const shortenString = (text: string, maxLength = 120) =>
    text.length <= maxLength ? text : text.substring(0, maxLength - 3) + "...";

  return (
    <>
      {projects.map((project, i) => (
        <MotionBox
          key={"project-" + i}
          bg="white"
          _dark={{ bg: "gray.800" }}
          rounded="lg"
          boxShadow="md"
          maxW="sm"
          w="full"
          overflow="hidden"
          transition="transform 0.3s ease"
          _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
        >
          <Box height={200} w="full">
            <Image
              src={project.cover || "/images/math-in-software.png"}
              alt={project.title}
              w="full"
              h="full"
              objectFit="cover"
              transition="0.3s ease-in-out"
              _hover={{ transform: "scale(1.05)" }}
            />
          </Box>

          <Box p={4}>
            <Heading
              as="h3"
              size="md"
              mb={3}
              fontWeight="bold"
              color="black"
              _dark={{ color: "white" }}
              noOfLines={1}
            >
              {project.title}
            </Heading>

            <Text
              fontSize="sm"
              mb={4}
              color="gray.600"
              _dark={{ color: "gray.300" }}
            >
              {shortenString(project.desc)}
            </Text>

            <Heading as="h4" size="sm" mb={2}>
              Tools:
            </Heading>
            <HStack wrap="wrap" spacing={2} mb={4}>
              {project.tools.map((tool, i) => (
                <Text
                  key={"tool-" + i}
                  px={3}
                  py={1}
                  bg="gray.200"
                  _dark={{ bg: "gray.700" }}
                  rounded="full"
                  fontSize="sm"
                  letterSpacing="wider"
                >
                  {tool}
                </Text>
              ))}
            </HStack>

            <Flex justifyContent="space-between" mt={4}>
              <Link href={project.git} isExternal>
                <CustomButton text="Source">
                  <GithubIcon />
                </CustomButton>
              </Link>
              <Link href={project.live} isExternal>
                <CustomButton text="Live">
                  <ChromeIcon />
                </CustomButton>
              </Link>
            </Flex>
          </Box>
        </MotionBox>
      ))}
    </>
  );
};

export default ProjectCard;
