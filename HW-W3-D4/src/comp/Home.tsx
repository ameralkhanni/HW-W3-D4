import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Home() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      text:
        "",
      image:
        'https://vmc.gea.gov.sa/sites/default/files/2023-01/01%20%2838%29.jpg',
    },
    {
      text:
        "",
      image:
        'https://globetrender.com/wp-content/uploads/2020/12/1_DiriyahGate_EscarmentWalk_04a-copy-scaled.jpg',
    },
    {
      text:
        "",
      image:
        'https://globetrender.com/wp-content/uploads/2019/10/unnamed-2-e1571692091776.png',
    },
    {
      text:
        "",
      image:
        '    https://globetrender.com/wp-content/uploads/2022/04/Villas-1-scaled.jpg',
    },
    {
      text:
        "",
      image:
        '     https://globetrender.com/wp-content/uploads/2020/09/HabitasTulum2_AleksOl-1-scaled.jpg',
    },{
      text:
        "",
      image:
        'https://globetrender.com/wp-content/uploads/2020/04/18-7-Star-Room-scaled-e1587895568413.jpg',
    },
  ];

  return (
    
    <Box
      position={'relative'}
      mx="auto"
      height={'60rem'}
      width={'full'}
      overflow={'hidden'}
      color='white'
      >
        <Box m='100px'
textAlign={'center'}
    >
    
    <Heading
    color={'black'}
    
    >Enjoy An Unparalleled Experience With Us</Heading>



    </Box>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="50px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="50px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider: any) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'2xl'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
         
            backgroundImage={`url(${card.image})`
            }>
            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="1000px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="80%"
                right={"140%"}
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                
                </Heading>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
    
  );
}