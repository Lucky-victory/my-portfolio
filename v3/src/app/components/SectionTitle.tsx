import { fredokaFont } from "@/helpers/font";
import { Box, Heading } from "@chakra-ui/react";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <Box
      textAlign={"center"}
      my={{ lg: 10, base: 8 }}
      mb={{ lg: "16", base: "12" }}
    >
      <Heading
        display={"inline-block"}
        className={fredokaFont.className}
        pos={"relative"}
        letterSpacing={"wide"}
        textTransform={"uppercase"}
        fontSize={{ lg: "2.8125rem", base: "2.3rem" }}
        _before={{
          content: `''`,
          pos: "absolute",
          w: "100%",
          top: "50%",
          left: "18.5%",
          bg: "var(--primary-theme-color)",
          zIndex: "-1",
          maxW: 300,
          h: { lg: "48px", base: "32px" },
        }}
      >
        {title}
      </Heading>
    </Box>
  );
};

export default SectionTitle;
