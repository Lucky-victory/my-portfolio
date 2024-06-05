import { Box, Flex, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import PostCard from "./PostCard";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/blog");

      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const { posts } = jsonResponse;
      setPosts(posts);
      setIsLoading(false);
    } catch (err) {}
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <Box id="blog" as="section">
      <SectionTitle title="Blog" />
      <Section>
        {loading ? (
          <Spinner
            label="loading"
            top={"50%"}
            pos={"absolute"}
            left={"50%"}
            transform={"translate(-50%,-50%)"}
            size={"xl"}
            color={"var(--primary-theme-color)"}
          />
        ) : (
          <Flex
            wrap={"wrap"}
            gap={5}
            px={{ base: 4, lg: 6 }}
            my={6}
            maxW={1300}
            mx={"auto"}
            justify={"center"}
          >
            {posts?.map((post, i) => (
              <PostCard key={"post" + i} post={post} />
            ))}
          </Flex>
        )}
      </Section>
    </Box>
  );
};

export default Blogs;
