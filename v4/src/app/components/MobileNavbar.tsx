import React, { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const MotionBox = motion(Box);

const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const iconColor = useColorModeValue("blue.500", "blue.300");

  const MotionDrawerContent = motion(DrawerContent);

  return (
    <Box display={{ base: "block", lg: "none" }} ml="auto" mt={2}>
      <Button
        ref={btnRef}
        onClick={onOpen}
        variant="unstyled"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="40px"
        width="40px"
      >
        <AnimatePresence>
          {[0, 1, 2].map((i) => (
            <MotionBox
              key={i}
              height="2px"
              width="24px"
              background={iconColor}
              margin="3px 0"
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 5 }}
              transition={{ duration: 0.2, delay: i * 0.1 }}
            />
          ))}
        </AnimatePresence>
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <MotionDrawerContent
          bg={bgColor}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 180 }}
        >
          <DrawerCloseButton color={textColor} />
          <DrawerBody pt={16}>
            <VStack spacing={6} align="stretch">
              <Navbar canHide={false} />
            </VStack>
          </DrawerBody>
        </MotionDrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileNavbar;
