import { Box, Flex, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import PostCard from "./PostCard";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [loading,setIsLoading]=useState(false)
  const fetchPostsByUsername = async (username: string) => {
    try{
setIsLoading(true)
      const query = JSON.stringify({
        query: `{
                      user(username: "${username}") {
                        publication {
                          posts(page: 0) {
                            _id
                            cuid
                            coverImage
                            title
                            slug
                            brief
                          }
                      }
                  }
              }`,
    });

    const response = await fetch("https://api.hashnode.com/", {
      method: "post",
      body: query,
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    const { posts } = jsonResponse?.data?.user?.publication;
    setPosts(posts);
    setIsLoading(false)
  }
  catch(err){
    
  }
  };
  useEffect(() => {
    fetchPostsByUsername("lucky-victory");
  }, []);
  return (
    <Box id="blog" as="section">
      <SectionTitle title="Blog" />
      <Section>
        {loading ? <Spinner label="loading"top={'50%'} pos={'absolute'} left={'50%'} transform={'translate(-50%,-50%)'} size={'xl'} color={'var(--primary-theme-color)'}/>: 
        <Flex
        wrap={"wrap"}
          gap={5}
          px={{base:2,lg:4}}

          my={6}
          maxW={1300}
          mx={"auto"}
          justify={"center"}
          >
          {posts?.map((post, i) => <PostCard key={"post" + i} post={post} />)}
        </Flex>
        }
      </Section>
    </Box>
  );
};

export default Blogs;
