import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, FormControl, FormLabel, Input, Textarea, Button, useToast, Box, Tag, Wrap, Text} from '@chakra-ui/react'
import { useAppDispatch, useAppSelector } from '../store'
import { clearForm, clearSelectedTracks, setFormTitle, setFormDescription } from '../store/playlist'
import { postPlaylist, postPlaylistTracks } from '../libs/spotify'
import * as React from 'react'
  
const ModalCreatePlaylist = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const dispatch = useAppDispatch()
  const toast = useToast()
  const { token, user } = useAppSelector(state => state.auth)
  const { selectedTracks, form } = useAppSelector(state => state.playlist)
  
  const handleSubmit: React.FormEventHandler<HTMLButtonElement> = e => {
    e.preventDefault()

    const { title, description } = form
    const uris = selectedTracks.map((track) => track.uri)

    if (title.length <= 10) {
      return toast({
        description: 'Title needs 10 characters',
        status: 'error',
      })
    }

    if (description.length <= 20) {
      return toast({
        description: 'Description needs 20 characters',
         status: 'error',
      })
    }

    postPlaylist(token, user?.id as string, {
      name: title,
      description: description,
      public: false,
    })
    .then(({ data }) => {
      dispatch(clearForm())
      return postPlaylistTracks(token, data.id, {
        uris,
      })
    })
    .then(() => {
      dispatch(clearSelectedTracks())
      onClose()
      return toast({
        title: 'Yeay!',
        description: 'Your playlist has been created!',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    })
  }
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'xl'} isCentered>
      <ModalOverlay />
      <ModalContent as="form">
        <ModalHeader>Create New Playlist</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl id="title">
            <FormLabel>Title</FormLabel>
            <Input 
              type="text" 
              name="title" 
              onChange={e => dispatch(setFormTitle(e.target.value))} 
            />
          </FormControl>
          <FormControl id="description">
            <FormLabel>Description</FormLabel>
            <Textarea 
              bg={'smoke.400'}
              name="description" 
              onChange={e => dispatch(setFormDescription(e.target.value))} />
          </FormControl>
          <SelectedTracks />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="brand" onClick={handleSubmit}>Create</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

const SelectedTracks = () => {
  const { selectedTracks } = useAppSelector((state) => state.playlist)

  return (
    <Box mt={2}>
      <Text>{selectedTracks.length} tracks selected</Text>
      <Wrap spacing={1}>
        {selectedTracks.map((track) => {
          const artists = track.artists.map((artist, index) => {
            const isLast: boolean = index === track.artists.length - 1
            return artist.name + (isLast ? '' : ', ')
          })
          return (
            <Tag key={track.uri}>
              {track.name} by {artists}
            </Tag>
          )
        })}
      </Wrap>
    </Box>
  )
}

export default ModalCreatePlaylist