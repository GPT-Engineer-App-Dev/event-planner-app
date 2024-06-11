import { useState, useEffect } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack, Heading } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

const EditEvent = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const events = JSON.parse(localStorage.getItem("events")) || [];
    const event = events.find(event => event.id === parseInt(id));
    if (event) {
      setTitle(event.title);
      setDate(event.date);
      setDescription(event.description);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEvent = { id: parseInt(id), title, date, description };
    const events = JSON.parse(localStorage.getItem("events")) || [];
    const eventIndex = events.findIndex(event => event.id === parseInt(id));
    events[eventIndex] = updatedEvent;
    localStorage.setItem("events", JSON.stringify(events));
    navigate("/");
  };

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8}>
        <Box as="header" w="100%" bg="blue.500" color="white" p={4} borderRadius="md">
          <Heading as="h1" size="lg" textAlign="center">Edit Event</Heading>
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
              <Button type="submit" colorScheme="blue" w="full">Update Event</Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Container>
  );
};

export default EditEvent;