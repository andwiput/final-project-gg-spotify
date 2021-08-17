import { Box, Button, Center, Flex, Grid, Heading, Text, Image} from "@chakra-ui/react";


function App() {
  return (
    <Box maxW="100vw" p="2rem">
      <Flex justify={'space-between'} align={'center'}>
        <Text fontSize={'2xl'} fontWeight={900}>GenG Music</Text>
        <Button>Login with Spotify</Button>
      </Flex>
      <Grid templateColumns="1fr 1fr" gap="5vw" mt="3rem">
        <Flex direction={'column'} justify={'center'}>
          <Heading as={'h1'} fontSize={'6xl'}> Welcome to GenG Music!</Heading>
          <Text my={4} color={'smoke.400'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius unde vel cumque natus voluptates deleniti totam tempore, doloribus laudantium mollitia. Soluta iure, excepturi repellendus fugiat at provident reprehenderit nesciunt?</Text>
          <Box>
            <Button size={'md'}>Login with Spotify</Button>
          </Box>
        </Flex>
        <Center>
          <Image src={'https://picsum.photos/500/400'} borderRadius="md"/>
        </Center>
      </Grid>
    </Box>
  );
}

export default App;
