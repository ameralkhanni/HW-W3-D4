import React from "react";

import { Box, Button, chakra, Flex, SimpleGrid,Image } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Home3(){
  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={20}
      w="full"
      justifyContent="center"
      alignItems="center"
      
    >
        
      <Box
        shadow="xl"
        bg="white"
        _dark={{ bg: "gray.800" }}
        px={8}
        py={20}
        mx="auto"
        
      >
        
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color="gray.900"
              _dark={{ color: "gray.400" }}
              lineHeight={{ md: "shorter" }}
              
            >
                 Open your mind!
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              fontSize={{ md: "lg" }}
            >
        From celebrating art at the Louvre to exploring presidential palaces, your cultural journey in Sudai will leave you amazed.
<hr></hr>
<br></br>
<br></br>
     
            </chakra.p>
            <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg="#319795"
              _dark={{ bg: "gray.700" }}
              _hover={{ bg: "gray.700", _dark: { bg: "gray.600" } }}
              color="gray.100"
              as="a"
            >
Start your exploration  <ArrowForwardIcon boxSize={6}/>          </Button>
          </Box>
        
          <Image
        src='https://www.visitsaudi.com/content/dam/saudi-tourism/media/riyadh-articles/the-national-museum-of-saudi.jpg'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
        </SimpleGrid>
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box order={{ base: "initial", md: 2 }}>
            <chakra.h2
              mb={4}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: "center", md: "left" }}
              color="gray.900"
              _dark={{ color: "gray.400" }}
              lineHeight={{ md: "shorter" }}
            >
Chase thrills
            </chakra.h2>
            <chakra.p
              mb={5}
              textAlign={{ base: "center", sm: "left" }}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              fontSize={{ md: "lg" }}
            >
              Experience the thrills of Yas Island and find serenity on the shores of Saadiyat Island, all in the same 24 hours. Whatever your mood,  has it all whenever you're ready.
              <hr></hr>
<br></br>
<br></br>
            </chakra.p>
            <Button
              w={{ base: "full", sm: "auto" }}
              size="lg"
              bg="#319795"
              
              _dark={{ bg: "gray.700" }}
              _hover={{ bg: "gray.700", _dark: { bg: "gray.600" } }}
              color="gray.100"
              as="a"
            >
Plan  your pefect day <ArrowForwardIcon boxSize={6}></ArrowForwardIcon>    </Button>
          </Box>
         <Image
        src='https://www.visitdubai.com/-/media/images/leisure/campaigns/tactical-campaigns/africa-winter-2022/laguna.jpg'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
        </SimpleGrid>
      </Box>
    </Flex>
  );
};
