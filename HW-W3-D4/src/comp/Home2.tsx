import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function Home2() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        mt='45%'
        backgroundImage={
          'url(https://globetrender.com/wp-content/uploads/2020/04/26-Residences-Cliff-scaled-e1587895604406.jpg)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6} >
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              textAlign={'left'}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
             Discover Saudi Arabia at your own pace
            </Text>
            <Text
              color={'white'}
              fontWeight={400}
              lineHeight={1.2}
              textAlign={'left'}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
Relax and rejuvenate
            </Text>
            <Stack direction={'row'}>
              <Button
                 colorScheme='blackAlpha'
                
                _hover={{ bg: '#319795' }}>
                Show me more
              </Button>
             
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }