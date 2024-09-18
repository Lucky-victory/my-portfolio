import { fredokaFont } from "@/helpers/font";
import { Box, Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import { ReactNode } from "react";

const CustomButton = ({
  link = "",
  text = "Read More",
  children,
  outline = true,
}: {
  link?: string;
  text?: string;
  outline?: boolean;
  children?: ReactNode;
}) => {
  const btnStyle = outline
    ? {
        _before: {
          top: 0,
          pos: "absolute",
          h: "full",
          w: 0,
          content: `''`,
          bg: "var(--primary-theme-color)",
          left: 0,
          transition: "0.4s ease-in-out",
        },
        color: "var(--primary-theme-color)",
        _hover: { _before: { w: "full" }, color: "white" },
      }
    : {
        _before: {
          top: 0,
          pos: "absolute",
          h: "full",
          w: "full",
          content: `''`,
          bg: "var(--primary-theme-color)",
          right: 0,
          transition: "0.4s ease-in-out",
        },
        color: "white",
        _hover: { _before: { w: 0 }, color: "var(--primary-theme-color)" },
      };

  return (
    <Button
      as={Link}
      target="_blank"
      display={"inline-block"}
      href={`${link}`}
      pos={"relative"}
      mt={4}
      className={fredokaFont.className}
      {...btnStyle}
      h={"auto"}
      variant={"unstyled"}
      border={"2px solid var(--primary-theme-color)"}
      bg={"transparent"}
      rounded={"none"}
      px={4}
      py={2}
    >
      <Box
        display={"flex"}
        gap={2}
        justifyContent="space-between"
        alignItems={"center"}
        pos={"relative"}
      >
        {children}
        <Text as={"span"} letterSpacing={"wider"}>
          {text}
        </Text>
      </Box>
    </Button>
  );
};

export default CustomButton;
