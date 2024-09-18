import { fredokaFont } from "@/helpers/font";
// import { Image } from "@chakra-ui/next-js";
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
import {
  ChangeEvent,
  FormEvent,
  TextareaHTMLAttributes,
  useState,
} from "react";
import Link from "next/link";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast({
    status: "success",
    title: "Message sent successfully",
    position: "top",
    duration: 4000,
  });
  const defaultStyles = {
    _focus: {
      borderColor: "var(--primary-theme-color)",
      border: "2px",
    },
    className: fredokaFont.className,
    h: { lg: 65, base: 54 },
    isRequired: true,
    px: {
      lg: 6,
      base: 4,
    },
    letterSpacing: "wider",
    fontSize: { lg: 18, base: 16 },
    rounded: "none",
    border: "1px",
    variant: "unstyled",
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
  async function handleSubmit(evt: FormEvent) {
    evt.preventDefault();
    console.log({ formState });
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

      setIsSubmitting(false);
      setFormState({ email: "", name: "", message: "" });
      toast();
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "An error occurred, please try again...",
        status: "error",
      });
      console.warn({ error });
    }
  }
  function handleChange(
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = evt.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <Box
      w={"full"}
      py={8}
      pos={"relative"}
      _before={{
        pos: "absolute",
        content: `''`,
        bg: "var(--primary-theme-color)",
        w: 500,
        top: { lg: 0 },
        bottom: { base: 0 },
        right: 0,
        h: { lg: "full", base: "50%" },
      }}
      pr={{ lg: 6, base: 4 }}
      pl={{ lg: 8, base: 4 }}
      maxW={1350}
      mx={"auto"}
    >
      <Flex
        justify={{ lg: "space-between", base: "center" }}
        gap={{ base: 6, lg: 8 }}
        maxW={1050}
        mx={"auto"}
        wrap={"wrap"}
      >
        <Box flex={"1"} maxW={320} minW={300} pos={"relative"}>
          <Heading className={fredokaFont.className} textAlign={"center"}>
            Let&apos;s work together
          </Heading>
          <Text textAlign={"center"} my={4}>
            I&apos;m always at your service, you can reach me through this form.
          </Text>
          <Flex
            align={"center"}
            className={fredokaFont.className}
            justify={"center"}
          >
            <Box
              zIndex={2}
              fontWeight={"extrabold"}
              fontSize={22}
              pos={"relative"}
              mt={6}
              _before={{
                pos: "absolute",
                content: `''`,
                h: 4,
                w: 10,
                bg: "var(--primary-theme-color)",
                top: "50%",
                left: "40%",
              }}
            >
              <Text as={"span"} letterSpacing={"wider"} pos={"relative"}>
                OR
              </Text>
            </Box>
          </Flex>
          <Text textAlign={"center"} mt={4}>
            on social media
          </Text>
          <HStack spacing={8} my={8} mx={"auto"} justify={"center"}>
            <Button
              as={Link}
              target="_blank"
              href={"https://twitter.com/lucky_victory1"}
              title="twitter "
              {...socialBtnStyles}
            >
              <TwitterIcon />
            </Button>
            <Button
              as={Link}
              target="_blank"
              href={"https://linkedin.com/in/lucky-victory-success"}
              {...socialBtnStyles}
              title="linkedin"
            >
              <LinkedInIcon />
            </Button>
            <Button
              as={Link}
              target="_blank"
              href={"https://github.com/lucky-victory"}
              title="github "
              {...socialBtnStyles}
            >
              <GithubIcon />
            </Button>
          </HStack>
        </Box>
        <Stack
          as={"form"}
          onSubmit={handleSubmit}
          pos={"relative"}
          w={"full"}
          spacing={8}
          py={"10"}
          px={{ lg: 8, base: 4 }}
          maxW={{ lg: 543, base: 450 }}
          border={"2px"}
          borderColor={"var(--primary-theme-color)"}
          bg={"var(--bg-color)"}
          boxShadow={{
            lg: "15px 10px 12px rgba(0, 0, 0, 0.25)",
            base: "-15px 10px 12px rgba(0, 0, 0, 0.25),15px 10px 12px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Input
            placeholder="Your Name"
            onChange={handleChange}
            {...defaultStyles}
            name="name"
            value={formState.name}
          />
          <Input
            placeholder="Your email"
            onChange={handleChange}
            {...defaultStyles}
            value={formState.email}
            type="email"
            name="email"
          />
          <Textarea
            placeholder="Your Message"
            name="message"
            minH={170}
            maxH={220}
            {...defaultStyles}
            value={formState.message}
            h={183}
            py={4}
            onChange={handleChange}
          />
          <Button
            textTransform={"uppercase"}
            variant={"unstyled"}
            py={{ lg: 4, base: 4 }}
            px={{ lg: 8, base: 6 }}
            h={"auto"}
            minH={{ lg: "45px", base: "40px" }}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            fontSize={{ lg: 18, base: 17 }}
            rounded={"none"}
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
