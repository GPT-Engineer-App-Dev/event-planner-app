import { Box, Container, Heading, VStack, Text, HStack, Spacer, Flex, Button, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Index = () => {
  const [events, setEvents] = useState([]);
  const toast = useToast();
  const navigate = useNavigate();

  const handleEdit = (event) => {
    navigate(`/edit-event/${event.id}`);
  };

  const handleDelete = (eventId) => {
    const updatedEvents = events.filter(event => event.id !== eventId);
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    toast({
      title: "Event deleted.",
      description: "The event has been deleted successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(storedEvents);
  }, []);

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        {/* Header */}
        <Box as="header" w="100%" bg="blue.500" color="white" p={4} borderRadius="md">
          <Heading as="h1" size="lg" textAlign="center">Events Management App</Heading>
        </Box>

        {/* Create Event Button */}
        <Box w="100%" textAlign="right">
          <Button as={Link} to="/create-event" colorScheme="blue">Create New Event</Button>
        </Box>

        {/* Events List */}
        <Box as="section" w="100%">
          <Heading as="h2" size="md" mb={4}>Upcoming Events</Heading>
          <VStack spacing={4}>
            {events.map(event => (
              <Box key={event.id} w="100%" p={4} borderWidth="1px" borderRadius="md" boxShadow="sm">
                <HStack>
                  <VStack align="start">
                    <Heading as="h3" size="sm">{event.title}</Heading>
                    <Text fontSize="sm">{event.date}</Text>
                    <Text>{event.description}</Text>
                  </VStack>
                  <Spacer />
                  <Button colorScheme="teal" onClick={() => handleEdit(event)}>Edit</Button>
                  <Button colorScheme="red" onClick={() => handleDelete(event.id)}>Delete</Button>
                </HStack>
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Footer */}
        <Box as="footer" w="100%" bg="gray.200" color="gray.700" p={4} borderRadius="md" textAlign="center">
          <Text fontSize="sm">© 2023 Events Management App. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;