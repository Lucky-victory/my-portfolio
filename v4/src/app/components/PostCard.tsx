import { Box, Heading, Text, Image, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import CustomButton from "./CustomButton";

const MotionBox = motion.create(Box as any);

const PostCard = ({ post = {} }: { post: any }) => {
  const shortenString = (text: string, maxLength = 150) =>
    text.length <= maxLength ? text : text.substring(0, maxLength - 3) + "...";

  const blogUrl = "https://blog.devvick.com";

  return (
    <MotionBox
      whileHover={{ scale: 1.05, boxShadow: "lg" }} // Subtle hover effect
      transition={{ duration: 0.3 }}
      p={6}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="sm"
      bg="white"
      _dark={{ bg: "gray.800" }}
      maxW="sm"
      overflow="hidden"
    >
      {post?.coverImage && (
        <Image
          src={post.coverImage?.url}
          alt={post.title}
          borderRadius="md"
          mb={4}
          objectFit="cover"
        />
      )}

      <Heading
        as="h3"
        size="md"
        noOfLines={2}
        mb={2}
        _hover={{ textDecoration: "underline" }}
      >
        <Link href={`${blogUrl}/${post.slug}`} isExternal>
          {post?.title}
        </Link>
      </Heading>

      <Text color="gray.600" _dark={{ color: "gray.300" }} mb={4}>
        {shortenString(post?.brief)}
      </Text>

      <CustomButton text="Read more" link={`${blogUrl}/${post.slug}`} />
    </MotionBox>
  );
};

export default PostCard;
