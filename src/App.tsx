import { Box, Button, Center, Flex, Grid, Heading, Text, Image} from "@chakra-ui/react";


function App() {
  return (
    <Box maxW="100vw">
      <Flex justify={'space-between'} align={'center'}>
        <Text fontSize={'2xl'} fontWeight={900}>GenG Music</Text>
      </Flex>
      <Grid templateColumns="1fr 1fr" gap="5vw">
        <Flex direction={'column'} justify={'center'} p="2rem">
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
