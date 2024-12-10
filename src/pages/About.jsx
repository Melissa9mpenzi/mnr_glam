import { MantineProvider } from "@mantine/core"; // Import MantineProvider
import { Accordion, Card, Container, Grid, Image, Text, Title } from "@mantine/core";

const About = () => {
  const teamMembers = [
    {
      name: "Melissa Sharon Lokoroma",
      position: "CEO & Founder, Head Designer",
      image: "/../melissa.jpg",
      description: "Visionary behind M&R Glam, leading the brand with passion and innovation.",
    },
    {
      name: "Raymond Njagala",
      position: "CEO & Co-Founder",
      image: "/../ray.jpg",
      description: "Creates unique and stunning designs that define our brand.",
    },
    {
      name: "Jane Smith",
      position: "Marketing Manager",
      image: "/../jane.jpg",
      description: "Strategist ensuring our collections reach a global audience.",
    },
  ];

  const faqs = [
    {
      question: "What does M&R Glam specialize in?",
      answer: "We specialize in fashionable and eco-friendly apparel for modern individuals.",
    },
    {
      question: "Do you offer custom tailoring?",
      answer: "Yes, we provide custom tailoring services for select collections.",
    },
    {
      question: "Can I visit your physical stores?",
      answer: "Absolutely! We have branches in Namugongo, Kansanga, and Gayaza.",
    },
  ];

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container className="bg-[#fbceb1] p-10 rounded-lg shadow-lg">
        {/* Section for Mission, Our Story, and FAQ in a side-by-side layout */}
        <Grid>
          <Grid.Col span={6}>
            <section className="text-left mb-16">
              <Title className="text-[#782116] text-4xl font-bold mb-4">Our Mission</Title>
              <Text className="text-[#952517] text-lg leading-relaxed">
                At M&R Glam, our mission is to redefine fashion by blending elegance, comfort, 
                and sustainability. We aim to empower our customers to express their unique style 
                while caring for the planet.
              </Text>
            </section>
          </Grid.Col>
          <Grid.Col span={6}>
            {/* Placeholder for image of model or product */}
            <Card shadow="sm" padding="lg" radius="md" className="bg-[#f47a43] text-white">
              <Card.Section>
                <Image src="/path-to-your-image.jpg" alt="Model Image" height={200} />
              </Card.Section>
            </Card>
          </Grid.Col>
        </Grid>

        <Grid>
          <Grid.Col span={6}>
            <section className="text-left mb-16">
              <Title className="text-[#e23d14] text-4xl font-bold mb-4">Our Story</Title>
              <Text className="text-[#bb2c13] text-lg leading-relaxed">
                Established in 2024, M&R Glam was born from a passion for fashion and a commitment 
                to quality. What started as a small boutique has grown into a trusted brand serving 
                diverse communities. We’re proud of our journey and excited for the future.
              </Text>
            </section>
          </Grid.Col>
          <Grid.Col span={6}>
            {/* Placeholder for image of model or product */}
            <Card shadow="sm" padding="lg" radius="md" className="bg-[#f47a43] text-white">
              <Card.Section>
                <Image src="/path-to-your-image.jpg" alt="Model Image" height={200} />
              </Card.Section>
            </Card>
          </Grid.Col>
        </Grid>

        {/* FAQ Section */}
        <Grid>
          <Grid.Col span={6}>
            <section className="text-left mb-16">
              <Title className="text-[#f47a43] text-4xl font-bold mb-8">Frequently Asked Questions</Title>
              <Accordion variant="separated" style={{ maxWidth: '350px', margin: '0 auto' }}>
                {faqs.map((faq, index) => (
                  <Accordion.Item key={index} value={`faq-${index}`}>
                    <Accordion.Control className="text-[#f0571f]">{faq.question}</Accordion.Control>
                    <Accordion.Panel className="text-[#782116]">{faq.answer}</Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>
            </section>
          </Grid.Col>
          <Grid.Col span={6}>
            {/* Placeholder for image of model or product */}
            <Card shadow="sm" padding="lg" radius="md" className="bg-[#f47a43] text-white">
              <Card.Section>
                <Image src="/path-to-your-image.jpg" alt="Model Image" height={200} />
              </Card.Section>
            </Card>
          </Grid.Col>
        </Grid>

        {/* Branches and Team Sections */}
        <Grid>
          <Grid.Col span={6}>
            <section className="text-left mb-16">
              <Title className="text-[#f8a879] text-4xl font-bold mb-4">Our Branches</Title>
              <Text className="text-[#952517] text-lg leading-relaxed">
                Visit us at any of our locations:
              </Text>
              <ul className="list-disc list-inside text-[#782116]">
                <li>Namugongo</li>
                <li>Kansanga</li>
                <li>Gayaza</li>
              </ul>
            </section>
          </Grid.Col>
          <Grid.Col span={6}>
            {/* Placeholder for image of model or store */}
            <Card shadow="sm" padding="lg" radius="md" className="bg-[#f47a43] text-white">
              <Card.Section>
                <Image src="/path-to-your-image.jpg" alt="Store Image" height={200} />
              </Card.Section>
            </Card>
          </Grid.Col>
        </Grid>

        {/* Team Members Section */}
        <section className="mb-16">
          <Title className="text-[#bb2c13] text-4xl font-bold mb-8 text-center">Our Team</Title>
          <Grid>
            {teamMembers.map((member, index) => (
              <Grid.Col key={index} span={4}>
                <Card shadow="sm" padding="lg" radius="md" className="bg-[#f47a43] text-white">
                  <Card.Section>
                    <Image src={member.image} alt={member.name} height={160} />
                  </Card.Section>
                  <Text weight={500} size="lg" className="mt-4">
                    {member.name}
                  </Text>
                  <Text size="sm" className="italic mb-2">
                    {member.position}
                  </Text>
                  <Text size="sm">{member.description}</Text>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </section>
      </Container>
    </MantineProvider>
  );
};

export default About;