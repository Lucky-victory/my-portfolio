import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
  Button,
  Box,
  Input,
} from "@chakra-ui/react";
import Navbar from "./Navbar";

import { useRef } from "react";

export default function MobileNavbar({
  setTheme,
  activeColor,
}: {
  setTheme: (color: string) => void;
  activeColor: string;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <Box hideFrom={"lg"} ml={"auto"} mt={2}>
      <Button ref={btnRef} onClick={onOpen} variant={"ghost"}>
        <Stack>
          <Box h={"3px"} w={"28px"} bg={"white"}></Box>
          <Box h={"3px"} w={"28px"} bg={"white"}></Box>
          <Box h={"3px"} w={"28px"} bg={"white"}></Box>
        </Stack>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"var(--section-bg-color)"}>
          <DrawerCloseButton />

          <DrawerHeader />
          <DrawerBody pt={8}>
            <Navbar
              setTheme={setTheme}
              activeColor={activeColor}
              canHide={false}
            />
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
