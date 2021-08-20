import { Box, Image, Text, Link, useColorModeValue } from '@chakra-ui/react'
import { Album, Artist } from '../types/spotify'

const AlbumCard = ({ album }: { album: Album }) => {

  const artists = album.artists?.map(
    (artist: Artist, index: number, array) => {
      const isLast: boolean = index === array.length - 1
      return (
        <Link
          href={artist?.external_urls?.spotify}
          key={artist.id}
          isExternal
        >
          {artist.name + (isLast ? '' : ', ')}
        </Link>
      )
    }
  )
  const image = album.images.find(image => image.width === 300)

  const bg = useColorModeValue('smoke.300', 'smoke.800')
  const color = useColorModeValue('leaf.700', 'leaf.300')
  const textArtist = useColorModeValue('smoke.600','smoke.400')

  return (
    <Box p={4} maxW={image?.width} bg={bg} borderRadius={'md'} >
      <Image w={image?.width} h={image?.height} src={image?.url} />
      <Text fontWeight={'bold'} mt={2}>{ album.name }</Text>
      <Text color={textArtist}>{ artists }</Text>
      <Link isExternal color={color} href={ album.external_urls.spotify }>Check on Spotify!</Link>
    </Box>
  )
}

export default AlbumCard