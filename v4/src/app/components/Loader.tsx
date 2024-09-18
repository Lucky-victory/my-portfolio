import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  useColorMode,
  IconButton,
  Fade,
  ScaleFade,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, SettingsIcon } from "@chakra-ui/icons";

const ThemeChooser = ({ onClose }: { onClose: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const { colorMode, setColorMode } = useColorMode();
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const borderColor = useColorModeValue("blue.500", "blue.300");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleThemeChange = (theme: string) => {
    setColorMode(theme);
  };

  const handleContinue = () => {
    setIsVisible(false);
    setTimeout(onClose, 500); // Delay to allow exit animation
  };

  const themes = [
    { name: "light", icon: SunIcon },
    { name: "dark", icon: MoonIcon },
    { name: "system", icon: SettingsIcon },
  ];

  return (
    <Fade in={isVisible}>
      <Flex
        position="fixed"
        inset={0}
        zIndex={9999}
        alignItems="center"
        justifyContent="center"
        bg="blackAlpha.600"
        backdropFilter="blur(5px)"
      >
        <ScaleFade initialScale={0.9} in={isVisible}>
          <Box
            bg={bgColor}
            p={8}
            borderRadius="lg"
            boxShadow="xl"
            maxWidth="md"
            width="full"
            border="2px solid"
            borderColor={borderColor}
          >
            <VStack spacing={6} align="stretch">
              <Heading size="lg" color={textColor}>
                Choose Your Theme
              </Heading>
              <Text
                fontSize="sm"
                color={useColorModeValue("gray.600", "gray.300")}
              >
                Personalize your experience. You can change this later in
                settings.
              </Text>

              <Flex justifyContent="space-around">
                {themes.map(({ name, icon: Icon }) => (
                  <IconButton
                    key={name}
                    icon={<Icon />}
                    onClick={() => handleThemeChange(name)}
                    aria-label={`Set ${name} theme`}
                    size="lg"
                    variant={colorMode === name ? "solid" : "outline"}
                    colorScheme="blue"
                  />
                ))}
              </Flex>

              <Button
                onClick={handleContinue}
                colorScheme="blue"
                size="lg"
                _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                transition="all 0.2s"
              >
                Continue
              </Button>
            </VStack>
          </Box>
        </ScaleFade>
      </Flex>
    </Fade>
  );
};

export default ThemeChooser;
