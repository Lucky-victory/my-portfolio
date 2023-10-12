import {
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import ChromeIcon from "./icons/ChromeIcon";
import GithubIcon from "./icons/GithubIcon";
import CustomButton from "./CustomButton";
import { fredokaFont } from "@/helpers/font";

const projects=[
  {
    title:'Pontis',tools:['NextJS','Typescript','Wagmi','Chakra UI','Redux Toolkit','RainbowKit'],desc:'Pontis is an innovative decentralized application (DApp) that redefines the NFT landscape by combining bridging, minting, and swapping functionalities into a single, user-friendly platform.',git:'https://github.com/Lucky-victory/pontis-frontend',live:'https://pontis-dapp.vercel.app',cover:'/images/pontis.png'
  },
  {
    title:'Recipto',tools:['React','Framework7','Javascript','SCSS','Appwrite','Redux Toolkit'],desc:'Recipto is a user-friendly recipe-sharing platform that allows passionate home cooks and food enthusiasts to effortlessly share their culinary masterpieces, from mouthwatering appetizers to delectable desserts, inspiring others to embark on their own delightful cooking journeys.',git:'https://github.com/lucky-victory/recipto',live:'https://recipto.vercel.app',cover:'/images/recipto.png'
  },
  {
    title:'Donare',tools:['NextJS','Typescript','Wagmi','Headless UI','TailwindCSS','RainbowKit'],desc:`Donare enables trustworthy individuals to gather resources for pressing concerns and fund grants. Donare's reach isn't confined to a single blockchain; it's accessible to users across various EVM chains.`,git:'https://github.com/Lucky-victory/donare-frontend',live:'https://donare-dapp.vercel.app',cover:'/images/donare.png'
  },
  {
    title:'My Portfolio',tools:['Typescript','NextJS','Chakra UI','Resend'],desc:'My portfolio website serves as a creative canvas where I showcase my diverse range of projects, skills, and experiences. With an intuitive design and seamless navigation, it offers visitors a glimpse into my journey as a passionate creator.',git:'https://github.com/lucky-victory/my-portfolio',live:'https://lucky-victory.dev',cover:'/images/portfolio.png'
  },
  {
    title:'HackHost',tools:['Typescript','NextJS','Chakra UI','TiDB','Redux Toolkit','Prisma'],desc:'HackHost is an open-source platform that simplifies hackathon hosting. It offers a user-friendly interface built with chakra-ui, Next.js, Prisma, and TiDB Serverless. ',git:'https://github.com/lucky-victory/hackhost',live:'https://hackhost-alpha.vercel.app',cover:'/images/hackhost.png'
  },
  {
    title:'Rejuvenate AI',tools:['Typescript','NextJS','Chakra UI','TailwindCSS'],desc:'A decentralized web app at the forefront of healthy living. We want to build healthy communities all around the world, we want these communities to form green zones in their regions, ',git:'https://github.com/Lucky-victory/rejuvenate',live:'https://rejuvenate-ai.netlify.app/',cover:'/images/rejuvenate.png'
  },
]
const ProjectCard = () => {
  function shortenString(text: string, maxLength = 120) {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength - 3) + "...";
    }
  }
  return (
    <>
    {projects.map((project,i)=> <Box key={'project-'+i}
      overflow={"hidden"}
      bg={"var(--bg-color)"}
      rounded={"md"}
      minH={450}
      minW={300}  transition={"0.3s ease-in-out"}
      maxW={380}
      _hover={{transform:'translateY(-5px)'}}
      w={'full'} 
      border={"2px solid var(--primary-theme-color)"}
    >
      <Box height={200} w={"full"} bg={'var(--bg-color)'}>
        <Image
          src={project.cover||"/images/math-in-software.png"}
          alt=""
          w={"full"}
          style={{ objectFit: "contain" }}
          h={"full"}
        />
      </Box>
      <Heading
        color={"black"}
        bg={"var(--primary-theme-color)"}
        size={{lg:"md",base:'lg',md:'md'}}
        px={4}
        py={3}
        maxW={"90%"}
        // display={'inline-block'}
        my={3}
      >
       {project.title}
      </Heading>
      <Box px={4} pb={4}>
        <Text fontSize={{lg:"15px",base:'14px'}} color={"#f1f1f1"}>
       {shortenString(project.desc)}{" "}
        </Text>
        <Heading mt={3}  size={{lg:"sm",base:'md'}} as={"h3"}>
          Tools:
        </Heading>
        <HStack wrap={"wrap"} mb={1} mt={3}>
          {project?.tools.map((tool,i) => (
            <Text
              key={'tool'+i}
              as={"span"}
              px={3} pt={0.5}
              pb={1}
              fontSize={{base:"14px",lg:'16px'}}
              rounded={"full"} letterSpacing={'wider'} className={fredokaFont.className}
              color={"var(--primary-theme-color,white)"}
              bg={"var(--tag-bg-gradient)"}
              >
              {tool}
            </Text>
          ))}
        </HStack>
        <Flex mt={0} gap={5}>
          <CustomButton outline={false} text="Source" link={project.git}>
        <Box  minW={26}>

              <GithubIcon />
        </Box>
         
          </CustomButton>{" "}
          <CustomButton text="Live" link={project.live}>
          <Box  minW={26}>

              <ChromeIcon />
          </Box>
            
          </CustomButton>{" "}
        </Flex>
      </Box>
    </Box>
        )}
        </>
  );
};

export default ProjectCard;
