import { Box, Button, Container, Flex, Heading, HStack, IconButton, Image, Input, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="teal.500" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">RecipeShare</Heading>
        <HStack spacing={8}>
          <Button variant="link" color="white">Home</Button>
          <Button variant="link" color="white">Recipes</Button>
          <Button variant="link" color="white">Submit a Recipe</Button>
          <Button variant="link" color="white">Contact</Button>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex as="section" bg="gray.100" p={10} alignItems="center" justifyContent="center" direction="column" textAlign="center">
        <Heading mb={4}>Welcome to RecipeShare</Heading>
        <Text fontSize="lg" mb={6}>Discover and share amazing recipes from around the world.</Text>
        <Button colorScheme="teal" size="lg">Get Started</Button>
      </Flex>

      {/* Recipes Section */}
      <Box as="section" p={10}>
        <Heading mb={6} textAlign="center">Recipes</Heading>
        <Flex wrap="wrap" justifyContent="center" spacing={6}>
          {/* Example Recipe Card */}
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://via.placeholder.com/150" alt="Recipe Image" />
            <Box p={6}>
              <Heading size="md" mb={2}>Recipe Title</Heading>
              <Text mb={4}>Short description of the recipe.</Text>
              <Button colorScheme="teal" size="sm">View Recipe</Button>
            </Box>
          </Box>
          {/* Add more recipe cards as needed */}
        </Flex>
      </Box>

      {/* Submit a Recipe Section */}
      <Box as="section" bg="gray.100" p={10}>
        <Heading mb={6} textAlign="center">Submit a Recipe</Heading>
        <VStack spacing={4} maxW="md" mx="auto">
          <Input placeholder="Recipe Title" />
          <Input placeholder="Image URL" />
          <Textarea placeholder="Recipe Description" />
          <Button colorScheme="teal" size="md">Submit</Button>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="teal.500" color="white" p={4} textAlign="center">
        <Text mb={2}>Contact us at: info@recipeshare.com</Text>
        <HStack spacing={4} justifyContent="center">
          <IconButton as="a" href="#" aria-label="Facebook" icon={<FaFacebook />} />
          <IconButton as="a" href="#" aria-label="Twitter" icon={<FaTwitter />} />
          <IconButton as="a" href="#" aria-label="Instagram" icon={<FaInstagram />} />
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;