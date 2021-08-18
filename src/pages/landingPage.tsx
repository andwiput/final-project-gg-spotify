import { Box, Button, Center, Flex, Grid, Heading, Text, Image, useColorMode } from "@chakra-ui/react";
import SwitchTheme from "../components/switchTheme";
import { FaSpotify } from 'react-icons/fa'

const LandingPage = () => {
    const { colorMode } = useColorMode()
  return (
    <Box maxW="100vw">
      <Flex as={'nav'} justify={"space-between"} align={"center"} p={"1rem"}>
        <Text fontSize={"2xl"} fontWeight={900}>
          GenG Music
        </Text>
        <Text><SwitchTheme/></Text>
      </Flex>
      <Grid as={'main'} templateColumns="1fr 1fr" gap="5vw" minH="90vh" px={"2rem"}>
        <Flex direction={"column"} justify={"center"}>
          <Heading as={"h1"} fontSize={"6xl"}>
            Welcome to GenG Music !
          </Heading>
          <Text my={4} color={"smoke.500"}>
            Search your favorite tracks and create your own playlist
          </Text>
          <Box>
            <Button size={"md"} leftIcon={<FaSpotify/>}>Login with Spotify</Button>
          </Box>
        </Flex>
        <Center>
          <Image src={"https://picsum.photos/500/350"} borderRadius="md" />
        </Center>
      </Grid>
      <Center as={'footer'} h={"3rem"} bg={colorMode === 'light' ? 'smoke.300' : 'smoke.800'}>
        with 💚 by Andy Dwi for Generasi Gigih Program
      </Center>
    </Box>
  );
};

export default LandingPage;
