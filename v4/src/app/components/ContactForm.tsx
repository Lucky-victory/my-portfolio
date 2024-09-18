import { fredokaFont } from "@/helpers/font";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import ChromeIcon from "./icons/ChromeIcon";
import GithubIcon from "./icons/GithubIcon";
import TwitterIcon from "./icons/TwitterIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import { ChangeEvent, FormEvent, useState } from "react";
import Link from "next/link";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const defaultStyles = {
    className: fredokaFont.className,
    h: { lg: "56px", base: "48px" },
    isRequired: true,
    px: { lg: 6, base: 4 },
    letterSpacing: "wider",
    fontSize: { lg: 18, base: 16 },
    rounded: "full",
    border: "1px",
    variant: "unstyled",
    _focus: { border: "2px solid var(--primary-theme-color)" },
  };

  const socialBtnStyles = {
    w: "50px",
    h: "50px",
    p: { base: 3, lg: 2.5 },
    _hover: { transform: "scale(1.1) translateY(-4px)" },
    variant: "unstyled",
    rounded: "full",
    border: "2px solid var(--primary-theme-color)",
    transition: "0.3s",
  };

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/email/sender", {
        method: "POST",
        body: JSON.stringify(formState),
      });
      await fetch("/api/email/receiver", {
        method: "POST",
        body: JSON.stringify(formState),
      });
      setFormState({ email: "", name: "", message: "" });
      toast({
        title: "Message sent successfully.",
        status: "success",
        duration: 4000,
        position: "top",
      });
    } catch (error) {
      toast({
        title: "An error occurred. Please try again.",
        status: "error",
        duration: 4000,
        position: "top",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = evt.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box
      w="full"
      py={8}
      pos="relative"
      pr={{ lg: 6, base: 4 }}
      pl={{ lg: 8, base: 4 }}
      maxW={1350}
      mx="auto"
    >
      <Flex
        justify={{ lg: "space-between", base: "center" }}
        gap={{ base: 6, lg: 8 }}
        maxW={1050}
        mx="auto"
        wrap="wrap"
      >
        {/* Left Side: Heading and Social Media */}
        <Box flex="1" maxW={320} minW={300} textAlign="center">
          <Heading className={fredokaFont.className}>
            Let&apos;s work together
          </Heading>
          <Text my={4}>
            I&apos;m always at your service. Reach me through this form or on
            social media.
          </Text>

          <Text mt={4}>Or find me on social media</Text>
          <HStack spacing={8} my={8} justify="center">
            <Button
              as={Link}
              href="https://twitter.com/lucky_victory1"
              target="_blank"
              title="Twitter"
              {...socialBtnStyles}
            >
              <TwitterIcon />
            </Button>
            <Button
              as={Link}
              href="https://linkedin.com/in/lucky-victory-success"
              target="_blank"
              title="LinkedIn"
              {...socialBtnStyles}
            >
              <LinkedInIcon />
            </Button>
            <Button
              as={Link}
              href="https://github.com/lucky-victory"
              target="_blank"
              title="GitHub"
              {...socialBtnStyles}
            >
              <GithubIcon />
            </Button>
          </HStack>
        </Box>

        {/* Right Side: Contact Form */}
        <Stack
          as="form"
          onSubmit={handleSubmit}
          w="full"
          spacing={8}
          py={10}
          px={{ lg: 8, base: 4 }}
          maxW={{ lg: 543, base: 450 }}
          // border="2px solid var(--primary-theme-color)"
          bg="var(--bg-color)"
          boxShadow="lg"
          rounded={"lg"}
        >
          <Input
            placeholder="Your Name"
            onChange={handleChange}
            {...defaultStyles}
            name="name"
            value={formState.name}
          />
          <Input
            placeholder="Your Email"
            type="email"
            onChange={handleChange}
            {...defaultStyles}
            name="email"
            value={formState.email}
          />
          <Textarea
            placeholder="Your Message"
            onChange={handleChange}
            {...defaultStyles}
            name="message"
            value={formState.message}
            h={183}
            py={4}
            maxH={220}
            rounded={"2xl"}
          />
          <Button
            textTransform={"uppercase"}
            variant={"unstyled"}
            py={{ lg: 3, base: 3 }}
            px={{ lg: 8, base: 6 }}
            h={"auto"}
            minH={{ lg: "45px", base: "40px" }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            fontSize={{ lg: 18, base: 17 }}
            rounded={"full"}
            overflow={"hidden"}
            border="2px solid var(--primary-theme-color)"
            bg="transparent"
            className={fredokaFont.className}
            pos={"relative"}
            _before={{
              top: 0,
              pos: "absolute",
              h: "full",
              w: "full",
              content: `''`,
              bg: "var(--primary-theme-color)",
              left: 0,
              transition: "0.4s ease-in-out",
            }}
            color="var(--bg-color)"
            _hover={{
              _disabled: { _before: { display: "none" } },
              _before: { h: 0 },
              color: "var(--primary-theme-color)",
            }}
            _disabled={{ _before: { display: "none" } }}
            type="submit"
            isLoading={isSubmitting}
            loadingText="Sending..."
          >
            <Text as={"span"} pos={"relative"}>
              Send Message
            </Text>
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
};

export default ContactForm;
