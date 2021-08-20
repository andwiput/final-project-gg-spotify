import { Box, Heading, Wrap, WrapItem } from '@chakra-ui/react'
import { getNewReleases } from '../libs/spotify'
import { useAppSelector } from '../store'
import { useEffect, useState } from 'react'
import { Album } from '../types/spotify'
import AlbumCard from '../components/albumCard'

const Home = () => {
  const [albums, setAlbums] = useState<Album[]>([])
  const { token } = useAppSelector((state) => state.auth)

  useEffect(() => {
    getNewReleases(token).then((res) => setAlbums(res.data.albums.items))
  }, [token])

  return (
    <Box w={'100%'} p={'2rem'}>
      <Heading as="h1" size="lg" mb={6}>
        New Releases
      </Heading>
      <Wrap spacing={6}>
        {albums.map((album: Album) => (
          <WrapItem key={album.id}>
            <AlbumCard album={album} />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  )
}

export default Home