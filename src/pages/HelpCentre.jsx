import React from "react";
import { Container, Title, Text, Accordion, Box, Anchor, MantineProvider } from "@mantine/core";

const HelpCentre = () => {
  return (
    <div className="bg-accent">

    <MantineProvider>
      <div className="">
        
      </div>
    <Container size="lg" py="xl">
      <Title align="center" mb="md">Help Centre</Title>
      <Text align="center"  mb="xl">
        Find answers to your questions and explore helpful resources to make your shopping experience smooth.
      </Text>

      <Accordion variant="separated" mb="xl">
        <Accordion.Item value="order-status">
          <Accordion.Control>How do I check the status of my order?</Accordion.Control>
          <Accordion.Panel>
            You can check your order status by logging into your account and navigating to the "Orders" section.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="return-policy">
          <Accordion.Control>What is your return policy?</Accordion.Control>
          <Accordion.Panel>
            We accept returns within 14 days of delivery. The item must be in its original condition, including tags and packaging.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="payment-options">
          <Accordion.Control>What payment methods are accepted?</Accordion.Control>
          <Accordion.Panel>
            We accept Visa, Mastercard, PayPal, and mobile money payments (MTN and Airtel).
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="shipping-time">
          <Accordion.Control>How long does shipping take?</Accordion.Control>
          <Accordion.Panel>
            Standard shipping takes 3–7 business days. Express shipping options are also available at checkout.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="contact-support">
          <Accordion.Control>How can I contact customer support?</Accordion.Control>
          <Accordion.Panel>
            You can contact us via email at <Anchor href="mailto:support@mandrglam.com">support@mandrglam.com</Anchor> or call us at +256 700 123 456.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Box>
        <Title order={3} mb="md">
          Contact Information
        </Title>
        <Text>
          For further assistance, feel free to reach out:
        </Text>
        <Text>
          <strong>Email:</strong> <Anchor href="mailto:support@mandrglam.com">support@mandrglam.com</Anchor>
        </Text>
        <Text>
          <strong>Phone:</strong> +256 700 123 456
        </Text>
        <Text>
          <strong>Business Hours:</strong> Monday - Friday, 9 AM - 6 PM
        </Text>
      </Box>
    </Container>
    </MantineProvider>
    </div>
  );
};

export default HelpCentre;
