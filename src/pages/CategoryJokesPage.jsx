import { VStack, Button, Box, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import JokeCard from "../components/JokeCard";
import { getCategoryJoke } from "../API/getCategoryJoke";
import { useParams } from "react-router-dom";

export default function CategoryJokesPage() {
  const [joke, setJoke] = useState([]);
  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    getCategoryJoke(category).then((data) => setJoke(data));
  }, [category]);

  return (
    <Box px={5}>
      <VStack>
        <Text>nevim</Text>
        <Button
          colorScheme="blue"
          size="lg"
          my={2}
          onClick={() => {
            getCategoryJoke(category).then((data) => setJoke(data));
          }}
        >
          Get new Joke
        </Button>
        <JokeCard imageSrc={joke.icon_url} theJoke={joke.value} />
      </VStack>
    </Box>
  );
}
