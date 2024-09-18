import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const Section = ({
  children,
  py = 6,
  minH = 723,
}: {
  children: ReactNode;
  py?: number | string;
  minH?: string | number;
}) => {
  return (
    <Box pos={'relative'}
      my={{ lg: 8, base: 6 }}
      minH={minH}
      bg={"var(--section-bg-color)"}
      py={py}
      px={{ lg: 8, base: 6, xs: 4 }}
    >
      {children}
    </Box>
  );
};

export default Section;
