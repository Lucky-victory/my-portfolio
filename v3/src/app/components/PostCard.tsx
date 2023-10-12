import {
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import ChromeIcon from "./icons/ChromeIcon";
import GithubIcon from "./icons/GithubIcon";
import Link from "next/link";
import CustomButton from "./CustomButton";

const PostCard = ({ post = {} }: { post: any }) => {
  function shortenString(text: string, maxLength = 150) {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength - 3) + "...";
    }
  }
  const blogUrl = "https://blog.lucky-victory.dev";
  return (
    <Box
      overflow={"hidden"}
      bg={"var(--bg-color)"}
      rounded={"md"}
      minH={400}
      minW={300}
      maxW={380}
      w={'full'} 
      border={"2px solid var(--app-color-3)"}
      transition={"0.3s ease-in-out"}
      _hover={{transform:'translateY(-5px)'}}
    >
      <Box height={200} w={"full"}>
        <Image
          src={post?.coverImage}
          alt=""
          w={"full"}
          style={{ objectFit: "cover" }}
          h={"full"}
        />
      </Box>
      <Heading
        color={"black"}
        bg={"var(--primary-theme-color)"}
        size={{lg:"md",base:'lg',md:'md'}}
        px={4}
        py={1}
        maxW={"90%"}
        my={3}
      >
        {post?.title}
      </Heading>
      <Box px={4} pb={4}>
        <Text fontSize={{lg:"15px",base:'14px'}} color={"#f1f1f1"}>
          {shortenString(post?.brief)}{" "}
        </Text>

        <CustomButton link={`${blogUrl}/${post?.slug}`} />
      </Box>
    </Box>
  );
};

export default PostCard;
