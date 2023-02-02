import React from 'react'
import { Box, Flex, Image, Link, chakra, Button, ButtonGroup, Card, CardBody,Text, CardFooter, Divider, Heading, Stack, SimpleGrid } from "@chakra-ui/react";

function Conte() {
  return (
    <div>
            <SimpleGrid columns={2} spacing={'10%'}>

        <Box >
    <Box mt='10%'
    ml='30%'
    >
    
    <Heading>Experience Saudi Arabia</Heading>



    </Box>
        
 
    <Card maxW='xxl'
    
    mt='10%'
    ml='20%'

    
    >
    <CardBody>
      <Image
        src='https://datepalmsncamels.files.wordpress.com/2022/01/ula27.jpg?w=1080&h=810&crop=1'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='10' spacing='3'>
        <Heading size='md'>Exploring Alula
</Heading>
        <Text>
        There are few places in the world where you can still feel like a true explorer charting the unknown. In many historic destinations, the illusion of discovery is promptly shattered by a jungle of selfie sticks. But in AlUla, which is home to Saudi Arabia’s first UNESCO World Heritage Site
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          
        </Text>
      </Stack>
    </CardBody>
    <Divider />
  
  </Card>
  </Box>
  <Box>
  <Card maxW='xl'
  maxH={'xl'}
   
   mt='9%' 
    >
    <CardBody>
      <Image
        src='https://halayallaimages-new.s3.me-south-1.amazonaws.com/dmc/venue-images/dmc_venue_635969673adaa.JPEG'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='10' spacing='3'>
        <Heading size='md'>Discover Another Side of Adventure
</Heading>
        <Text>
        There really is only one Jeddah, where excitement awaits those who travel from near or far. Prepare to be dazzled by the sights and sounds of Saudi Arabia’s historical gateway Adrenaline courses through your veins, spectacular views stretching out all around you at Dalila camp.


        </Text>
        <Text color='blue.600' fontSize='2xl'>
          
        </Text>
      </Stack>
    </CardBody>
    <Card>
    <CardBody>
      <Image
        src='https://halayallaimages-new.s3.me-south-1.amazonaws.com/dmc/venue-images/dmc_venue_63a1ecbedfd42.jpg'
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='10' spacing='3'>
        <Heading size='md'>Living room Sofa</Heading>
        <Text>
        Wake up a world away from the everyday, in the soul of the desert before taking on the dunes.
        </Text>
        <Text color='blue.600' fontSize='2xl'>
          
        </Text>
      </Stack>
    </CardBody>
    </Card>
    <Divider />
  
  </Card>
  </Box>
 
  </SimpleGrid>

  </div>
  )
}

export default Conte

