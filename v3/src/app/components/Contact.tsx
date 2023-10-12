import { Flex } from "@chakra-ui/react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact">
      <SectionTitle title="Contact" />

      <Section py={"0"} minH="auto">
        <Flex gap={6} justify={"space-between"}>
          <ContactForm />
        </Flex>
      </Section>
    </section>
  );
};

export default Contact;
