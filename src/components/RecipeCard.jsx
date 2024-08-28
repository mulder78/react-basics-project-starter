import { Card, Image, Flex, Heading, Text,Tag } from "@chakra-ui/react";


export const RecipeCard = ({ recipe, onSelect }) => {
  const relevantHealthLabels = recipe.healthLabels.filter(
    (label) => label === "Vegan" || label === "Vegetarian"
  );

 return (
	
    <Card
      backgroundColor={"white"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      onClick={onSelect}
      cursor="pointer"
			h="100%"
      _hover={{ transform: "scale(1.01)" }}
    >
      <Image
        src={recipe.image}
        alt={recipe.label}
        h={40}
        w="sm"
        objectFit="cover"
      />
      <Flex flexDirection={"column"} alignItems={"center"} p="4" gap={2}>
        <Text>{recipe.mealType.join(", ")}</Text>
        <Heading textAlign={"center"} size={["sm", "md"]}>
          {recipe.label}
        </Heading>
        {relevantHealthLabels.length > 0 && (
          <Tag bg={"purple.100"}>{relevantHealthLabels.join(", ")}</Tag>
        )}
        {recipe.dietLabels.length > 0 && (
          <Tag bg={"green.100"}>{recipe.dietLabels.join(", ")}</Tag>
        )}
        <Tag bg={"white"}>Dish: {recipe.dishType.join(", ")}</Tag>
        {recipe.cautions.length > 0 && (
          <>
            <Text>Cautions:</Text>
            <Tag bg={"red.100"}>{recipe.cautions.join(", ")}</Tag>
          </>
        )}
      </Flex>
    </Card>
  );
};

