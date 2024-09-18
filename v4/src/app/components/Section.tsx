import { Box, Container, useColorModeValue } from "@chakra-ui/react";

export const Section = ({
  children,
  py = 12,
  minH = "auto",
}: {
  children: React.ReactNode;
  py?: number;
  minH?: string;
}) => {
  const bgColor = useColorModeValue("blue.100", "gray.900");

  return (
    <Box
      rounded={"lg"}
      as="section"
      bg={bgColor}
      py={py}
      minH={minH}
      position="relative"
    >
      <Container maxW="container.xl">{children}</Container>
    </Box>
  );
};
