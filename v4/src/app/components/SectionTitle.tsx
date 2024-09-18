import { fredokaFont } from "@/helpers/font";
import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box as any);
const MotionHeading = motion.create(Heading as any);

export const SectionTitle = ({ title }: { title: string }) => {
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
