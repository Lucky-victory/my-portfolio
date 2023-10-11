import { useTheme } from "@/helpers/hooks";
import { Box, Button, Flex } from "@chakra-ui/react";

const ThemeSwitcher = ({
  setTheme,
  activeColor,fixedPos=true
}: {
  setTheme: (color: string) => void;
  activeColor: string;fixedPos?:boolean
}) => {
  const colors = ["blue", "red", "purple", "orange", "green"];

  return (
    <Flex bg={"var(--bg-color)"} direction={{lg:fixedPos?'column':'row'}} right={3} top={5} px={2} py={3} gap={4} pos={{lg: fixedPos?'fixed':'relative'}} >
      {colors.map((color, i) => (
        <Button
          isDisabled={activeColor == color}
          _disabled={{ opacity: 0.7 }}
          _hover={{
            transform: "scale(1.05) translateY(-3px)",
            outline: "1px solid white",
          }}
          transition={"0.2s ease-out"}
          variant={"unstyled"}
          {...(activeColor == color ? { border: "2px" } : {})}
          rounded={"sm"}
          bg={`var(--${color})`}
          key={"theme-switch" + i}
          onClick={() => setTheme(color)}
          size={"xs"}
        ></Button>
      ))}
    </Flex>
  );
};

export default ThemeSwitcher;
