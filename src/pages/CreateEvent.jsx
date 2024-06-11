import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { id: Date.now(), title, date, description };
    const events = JSON.parse(localStorage.getItem("events")) || [];
    events.push(newEvent);
    localStorage.setItem("events", JSON.stringify(events));
    navigate("/");
  };

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8}>
        <Box as="header" w="100%" bg="blue.500" color="white" p={4} borderRadius="md">
          <Heading as="h1" size="lg" textAlign="center">Create New Event</Heading>
        </Box>
        <Box as="section" w="100%">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl id="title" isRequired>
                <FormLabel>Title</FormLabel>
                <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
              </FormControl>
              <FormControl id="date" isRequired>
                <FormLabel>Date</FormLabel>
                <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
              </FormControl>
              <FormControl id="description" isRequired>
                <FormLabel>Description</FormLabel>
                <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
              </FormControl>
              <Button type="submit" colorScheme="blue" w="full">Create Event</Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreateEvent;