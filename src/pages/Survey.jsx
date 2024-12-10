import { TextInput, Textarea, Button, Group, Title, Center } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';
import { MantineProvider } from '@mantine/core';

const Survey = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., send to server)
    alert('Thank you for your feedback!');
    navigate('/'); // Redirect to the home page or another relevant page
  };

  return (
    <div className="min-h-screen bg-accent flex items-center justify-center">
        <MantineProvider>
      <div className="w-full max-w-3xl bg-white p-8 rounded-md shadow-md">
        <Center>
          <Title className="text-center text-[#82442b] text-3xl font-bold mb-4">
            We Value Your Feedback
          </Title>
        </Center>
        <p className="text-center text-[#a16240] mb-6">
          Help us improve M&R Glam by sharing your thoughts and suggestions.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <TextInput
            label="Name (Optional)"
            placeholder="Enter your name"
            classNames={{ input: 'border-[#a76a45] focus:border-[#dfa47d] focus:ring-[#dfa47d]' }}
          />

          <TextInput
            label="Email Address"
            placeholder="Enter your email"
            required
            classNames={{ input: 'border-[#a76a45] focus:border-[#dfa47d] focus:ring-[#dfa47d]' }}
          />

          <Textarea
            label="Your Feedback"
            placeholder="Share your thoughts about our products and services"
            required
            minRows={4}
            classNames={{ input: 'border-[#a76a45] focus:border-[#dfa47d] focus:ring-[#dfa47d]' }}
          />

          <Group position="center" mt="md">
            <Button
              type="submit"
              className="bg-[#dfa47d] hover:bg-[#a76a45] text-white transition-all duration-200"
            >
              Submit Feedback
            </Button>
            <Button
              variant="outline"
              className="border-[#a76a45] text-[#a76a45] hover:bg-[#a76a45] hover:text-white transition-all duration-200"
              onClick={() => navigate('/')}
            >
              Cancel
            </Button>
          </Group>
        </form>
      </div>
      </MantineProvider>
    </div>
  );
};

export default Survey;
