import { Box, Flex, Center, Heading, Button, useDisclosure } from '@chakra-ui/react'
import { AddIcon, DeleteIcon } from '@chakra-ui/icons'
import { useAppDispatch, useAppSelector } from '../store'
import { clearSelectedTracks } from '../store/playlist'
import TrackList from '../components/trackList'
import ModalCreatePlaylist from '../components/modalCreatePlaylist'

const CreatePlaylist = () => {
  const dispatch = useAppDispatch()
  const { selectedTracks } = useAppSelector(state => state.playlist)
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box w={'100%'} p={'2rem'}>
      <Flex align="center" justify="space-between">
        <Heading as="h1" size="lg" mb={'6'}>
          Create Playlist
        </Heading>
        <Center>
          <Button
            leftIcon={<DeleteIcon />}
            onClick={() => dispatch(clearSelectedTracks())}
            type="button"
            variant="ghost"
            disabled={selectedTracks.length === 0}
            size={'sm'}
          >
            Clear Selection
          </Button>
          <Button
            leftIcon={<AddIcon />}
            onClick={onOpen}
            disabled={selectedTracks.length === 0}
            ml={2}
            size={'sm'}
          >
            Create Playlist
          </Button>
        </Center>
      </Flex>
      <TrackList />
      <ModalCreatePlaylist isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default CreatePlaylist