import { Flex, Icon, useColorModeValue } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { MdQueueMusic } from 'react-icons/md'
import { FaHome } from 'react-icons/fa'
import { IconType } from 'react-icons'

const Sidebar = () => {
  return (
    <Flex as="nav" direction="column" m={2} p={2}>
      <SidebarItem to="/home" icon={FaHome}>
        Home
      </SidebarItem>
      <SidebarItem to="/create-playlist" icon={MdQueueMusic}>
        Create Playlist
      </SidebarItem>
    </Flex>
  )
}

const SidebarItem = ({ icon, children, to }: {
  icon: IconType,
  children: React.ReactNode,
  to: string
}) => {
  const bg = useColorModeValue('#e5e5e5', '#262626')
  return (
    <Flex
      alignItems="center"
      mt={2}
      py={2}
      px={4}
      borderRadius="lg"
      as={NavLink}
      exact
      activeStyle={{ background: bg }}
      _hover={{ bg }}
      to={to}
    >
      <Icon as={icon} mr={4} /> {children}
    </Flex>
  )
}

export default Sidebar