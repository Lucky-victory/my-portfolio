import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Flex,
  Spinner,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { fredokaFont } from "@/helpers/font";
import PostCard from "./PostCard"; // Assuming this component exists

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const SectionTitle = ({ title }) => {
  const accentColor = useColorModeValue("blue.500", "blue.300");

  return (
    <Box textAlign="center" my={{ base: 8, lg: 12 }}>
      <MotionHeading
        className={fredokaFont.className}
        fontSize={{ base: "3xl", lg: "4xl" }}
        textTransform="uppercase"
        letterSpacing="wide"
        display="inline-block"
        position="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
        <MotionBox
          position="absolute"
          bottom="-4px"
          left="0"
          right="0"
          height="4px"
          bg={accentColor}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </MotionHeading>
    </Box>
  );
};

const Section = ({ children, py = 12, minH = "auto" }) => {
  const bgColor = useColorModeValue("gray.50", "gray.900");

  return (
    <Box as="section" bg={bgColor} py={py} minH={minH} position="relative">
      <Container maxW="container.xl">{children}</Container>
    </Box>
  );
};

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setIsLoading] = useState(true);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/blog");
      const { posts } = await response.json();
      setPosts(posts);
    } catch (err) {
      console.error("Failed to fetch posts:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <Box id="blog">
      <SectionTitle title="Blog" />
      <Section>
        <AnimatePresence>
          {loading ? (
            <Flex justify="center" align="center" minH="300px">
              <Spinner
                size="xl"
                color={useColorModeValue("blue.500", "blue.300")}
              />
            </Flex>
          ) : (
            <Flex wrap="wrap" gap={6} justify="center">
              {posts.map((post, i) => (
                <MotionBox
                  key={`post-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <PostCard post={post} />
                </MotionBox>
              ))}
            </Flex>
          )}
        </AnimatePresence>
      </Section>
    </Box>
  );
};

export default Blogs;
