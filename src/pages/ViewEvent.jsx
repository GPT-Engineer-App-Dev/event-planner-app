import { Box, Container, Heading, VStack, Text, Button } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ViewEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    const event = events.find(event => event.id === parseInt(id));
    if (event) {
      setEvent(event);
    }
  }, [id]);

  if (!event) {
    return (
      <Container maxW="container.md" p={4}>
        <Box as="header" w="100%" bg="red.500" color="white" p={4} borderRadius="md">
          <Heading as="h1" size="lg" textAlign="center">Event Not Found</Heading>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8}>
        <Box as="header" w="100%" bg="blue.500" color="white" p={4} borderRadius="md">
          <Heading as="h1" size="lg" textAlign="center">Event Details</Heading>
        </Box>
        <Box as="section" w="100%">
          <VStack spacing={4} align="start">
            <Heading as="h2" size="md">{event.title}</Heading>
            <Text fontSize="lg">{event.date}</Text>
            <Text>{event.description}</Text>
          </VStack>
        </Box>
        <Button colorScheme="blue" onClick={() => navigate("/")}>Back to Events</Button>
      </VStack>
    </Container>
  );
};

export default ViewEvent;