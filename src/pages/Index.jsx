import { Box, Button, Container, Flex, Heading, HStack, IconButton, Image, Input, Stack, Text, Textarea, VStack, useToast, useRadioGroup, useRadio } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaStar } from "react-icons/fa";
import { useState } from "react";

const Rating = ({ rating, setRating }) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "rating",
    value: rating,
    onChange: setRating,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {[1, 2, 3, 4, 5].map((value) => {
        const radio = getRadioProps({ value });
        return (
          <Box as="label" key={value}>
            <input {...radio} style={{ display: "none" }} />
            <Box
              {...radio}
              cursor="pointer"
              borderWidth="1px"
              borderRadius="md"
              boxShadow="md"
              _checked={{
                bg: "teal.600",
                color: "white",
                borderColor: "teal.600",
              }}
              _focus={{
                boxShadow: "outline",
              }}
              px={3}
              py={1}
            >
              <FaStar />
            </Box>
          </Box>
        );
      })}
    </HStack>
  );
};

const Index = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState(null);
  const [ratings, setRatings] = useState({});
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !instructions || !image) {
      toast({
        title: "Error",
        description: "All fields are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    // Handle form submission logic here (e.g., send data to an API)
    toast({
      title: "Success",
      description: "Recipe submitted successfully!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Clear form fields after submission
    setTitle("");
    setIngredients("");
    setInstructions("");
    setImage(null);
  };

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
              <Rating rating={ratings["recipe-id"] || 0} setRating={(value) => setRatings({ ...ratings, ["recipe-id"]: value })} />
              <Button colorScheme="teal" size="sm">View Recipe</Button>
            </Box>
          </Box>
          {/* Add more recipe cards as needed */}
        </Flex>
      </Box>

      {/* Submit a Recipe Section */}
      <Box as="section" bg="gray.100" p={10}>
        <Heading mb={6} textAlign="center">Submit a Recipe</Heading>
        <VStack as="form" spacing={4} maxW="md" mx="auto" onSubmit={handleSubmit}>
          <Input placeholder="Recipe Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <Textarea placeholder="Ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
          <Textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} />
          <Input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
          <Button colorScheme="teal" size="md" type="submit">Submit</Button>
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