import { useState } from "react";
import { Center, Box, VStack, Flex, Image } from "@chakra-ui/react";
import { data } from "../utils/data";
import { SearchBar } from "../components/SearchBar";
import { RecipeCard } from "../components/RecipeCard";
import { HealthFilter } from "../components/HealthFilter";
import myImage from "../images/wincLogo1.png";
import { ScrollToTopButton } from "../components/ScrollToTopButton";




export const RecipeListPage = ({ onSelectRecipe }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleFilterChange = (filter) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };

  const filteredRecipes = data.hits.filter((hit) => {
    const recipe = hit.recipe;
    const searchTermLower = searchTerm.toLowerCase();

    const matchesSearchTerm =
      recipe.label.toLowerCase().includes(searchTermLower) ||
      recipe.dietLabels.some((label) =>
        label.toLowerCase().includes(searchTermLower)
      );

    const matchesFilters =
      selectedFilters.length === 0 ||
      selectedFilters.some((filter) =>
        recipe.healthLabels
          .map((label) => label.toLowerCase())
          .includes(filter.toLowerCase())
      );

    return matchesSearchTerm && matchesFilters;
  });

  return (
    <Box backgroundColor={"blue.400"} minH="100vh" py={6}>
      <Center flexDir="column" p={2}>
        <Image src={myImage} alt="winc logo" w={[150, 200]} />

        {/* Zoekbalk en Filters */}
        <VStack mt={4} spacing={4} w="100%" maxW="1400px">
          <SearchBar
            searchTerm={searchTerm}
            onSearch={(e) => setSearchTerm(e.target.value)}
          />
          <HealthFilter
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
          />
          <Center w="100%">
            {filteredRecipes.length === 0 ? (
              <Box p={4} textAlign="center" color="white" fontSize="lg">
                Geen recepten gevonden die voldoen aan de zoekcriteria.
              </Box>
            ) : (
              <Flex
                mt={4}
                w="100%"
                maxW="1400px"
                justifyContent="center"
                flexWrap="wrap"
                gap={5}
              >
                {filteredRecipes.map((hit) => (
                  <Box key={hit.recipe.label} maxW={["100%", "sm", "xs"]}>
                    <RecipeCard
                      key={hit.recipe.label}
                      recipe={hit.recipe}
                      onSelect={() => {
                        onSelectRecipe(hit.recipe);
                        window.scrollTo(0, 0); // Scroll naar boven bij selectie van een recept
                      }}
                    />
                  </Box>
                ))}
              </Flex>
            )}
          </Center>
        </VStack>
      </Center>
      <ScrollToTopButton />
    </Box>
  );
};
