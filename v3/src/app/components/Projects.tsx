import { Box, Flex } from "@chakra-ui/react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects">
      <SectionTitle title="Projects" />
      <Section>
        <Flex
          wrap={"wrap"}
          gap={5}
          // px={{ lg: 6, base: 4 }}
          my={6}
          maxW={1300}
          mx={"auto"}
          justify={"center"}
      px={{base:4,lg:4}}

        >
          <ProjectCard />
       
        </Flex>
      </Section>
    </section>
  );
};

export default Projects;
