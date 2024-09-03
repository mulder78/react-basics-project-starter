import {
  Card,
  CardBody,
  Image,
  Text,
  Flex,
  Center,
  SimpleGrid,
  Heading,
  Box,
} from "@chakra-ui/react";
import { BackButton } from "../components/ui/BackButton";
import myImage from "../images/wincLogo2.png";
import { Tag, NutrientBox } from "../components/ui/RecipePage";

export const RecipePage = ({ recipe, onBack }) => {
  return (
    <Flex
      bgColor={"blue.400"}
      minH="100vh"
      p={2}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Card
        borderRadius="lg"
        w={["100%", "100%", "3xl"]}
        bgColor={"white"}
        boxShadow={"lg"}
      >
        <CardBody>
          <Flex justify={"flex-start"} align="center" mb={4}>
            <BackButton onClick={onBack} />
            <Center flex={1}>
              <img src={myImage} alt="winc restaurant logo" width="96" />
            </Center>
            <Box width="48px" />
          </Flex>
          <Image
            src={recipe.image}
            alt={recipe.label}
            borderRadius="lg"
            h={"64"}
            w={"100%"}
            objectFit={"cover"}
          />
          <SimpleGrid columns={[1, 1, 2]} spacing={4}>
            <Box align="start" spacing={4} mt={4}>
              <Text color={"gray.400"} fontSize="sm">
                <strong>{recipe.mealType.join(", ")}</strong>
              </Text>
              <Heading size={["sm", "md", "md"]} mb={2}>
                {recipe.label}
              </Heading>
              <Text>
                Total Cooking Time:<strong> {recipe.totalTime} mins</strong>
              </Text>
              <Text mb={2}>
                Servings:<strong> {recipe.yield}</strong>
              </Text>
              <Text>
                <strong>Ingredients:</strong>{" "}
              </Text>
              {recipe.ingredientLines.map((ingredient, index) => (
                <Text key={index} m={1}>
                  {ingredient}
                </Text>
              ))}
            </Box>
            <Box align="start" mt={4}>
              <Text>Health Labels:</Text>
              {recipe.healthLabels.map((label) => (
                <Tag key={label} colorScheme="purple">
                  {label}
                </Tag>
              ))}
              <Text>Diet Labels:</Text>
              {recipe.dietLabels.map((label) => (
                <Tag key={label} colorScheme="green">
                  {label}
                </Tag>
              ))}
              <Text> Cautions:</Text>
              <Tag colorScheme="red">
                {" "}
                {recipe.cautions.join(", ") || "None"}
              </Tag>
              <Text mt={2}>
                <strong>Total nutrients:</strong>
              </Text>
              <Flex flexWrap={"wrap"} gap={4} mt={2}>
                <NutrientBox
                  quantity={recipe.totalNutrients.ENERC_KCAL.quantity}
                  unit="kcal"
                  label="Calories"
                />
                <NutrientBox
                  quantity={recipe.totalNutrients.CHOCDF.quantity}
                  unit="g"
                  label="Carbs"
                />
                <NutrientBox
                  quantity={recipe.totalNutrients.PROCNT.quantity}
                  unit="g"
                  label="Protein"
                />
                <NutrientBox
                  quantity={recipe.totalNutrients.FAT.quantity}
                  unit="g"
                  label="Fat"
                />
                <NutrientBox
                  quantity={recipe.totalNutrients.CHOLE.quantity}
                  unit="mg"
                  label="Cholesterol"
                />
                <NutrientBox
                  quantity={recipe.totalNutrients.NA.quantity}
                  unit="mg"
                  label="Sodium"
                />
              </Flex>
            </Box>
          </SimpleGrid>
        </CardBody>
      </Card>
    </Flex>
  );
};
