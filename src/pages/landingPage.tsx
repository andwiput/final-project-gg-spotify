import { Box, Button, Center, Flex, Grid, Heading, Text, Image, useColorMode } from "@chakra-ui/react";
import { FaSpotify } from 'react-icons/fa'
import { authorize } from "../libs/spotify";
import { useAuthen } from "../libs/useAuthen";

const LandingPage = () => {
  const { colorMode } = useColorMode()
  useAuthen()

  return (
    <Box maxW="100vw">
      <Grid as={'main'} templateColumns="1fr 1fr" gap="5vw" minH="90vh" px={"2rem"}>
        <Flex direction={"column"} justify={"center"}>
          <Heading as={"h1"} fontSize={"6xl"} textAlign={'center'}>
            Welcome to GenG Music !
          </Heading>
          <Text my={4} color={"smoke.500"} textAlign={'center'}>
            Search your favorite tracks and create your own playlist
          </Text>
          <Box alignSelf={'center'}>
            <Button size={"md"} leftIcon={<FaSpotify/>} onClick={authorize}>Login with Spotify</Button>
          </Box>
        </Flex>
        <Center>
          <Image src={"https://picsum.photos/id/452/500/350"} borderRadius="md" />
        </Center>
      </Grid>
      <Center as={'footer'} h={"3rem"} bg={colorMode === 'light' ? 'smoke.300' : 'smoke.800'}>
        with 💚 for Generasi Gigih Program
      </Center>
    </Box>
  );
};

export default LandingPage;
