import { Heading, Image, Text } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import CustomButton from "./CustomButton";

const PostCard = ({ post = {} }: { post: any }) => {
  function shortenString(text: string, maxLength = 150) {
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.substring(0, maxLength - 3) + "...";
    }
  }
  const blogUrl = "https://blog.devvick.com";
  return (
    <Box
      overflow={"hidden"}
      bg={"var(--bg-color)"}
      rounded={"lg"}
      minH={{ lg: 400, base: 350 }}
      minW={{ lg: 300, base: 250 }}
      maxW={380}
      w={"full"}
      mb={3}
      border={"2px solid var(--chakra-colors-gray-400)"}
      transition={"0.3s ease-in-out"}
      _hover={{ transform: "translateY(-5px)" }}
    >
      <Box height={200} w={"full"}>
        <Image
          src={post?.coverImage?.url}
          alt=""
          w={"full"}
          style={{ objectFit: "cover" }}
          h={"full"}
        />
      </Box>
      <Heading
        color={"white"}
        bg={"var(--primary-theme-color)"}
        size={{ lg: "md", base: "lg", md: "md" }}
        px={4}
        py={1}
        maxW={"90%"}
        my={3}
      >
        {post?.title}
      </Heading>
      <Box px={4} pb={4}>
        <Text fontSize={{ lg: "15px", base: "14px" }} color={""}>
          {shortenString(post?.brief)}{" "}
        </Text>

        <CustomButton link={`${blogUrl}/${post?.slug}`} />
      </Box>
    </Box>
  );
};

export default PostCard;
