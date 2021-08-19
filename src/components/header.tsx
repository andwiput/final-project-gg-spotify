import { Center, Grid, Link, useColorMode } from "@chakra-ui/react"
import { useAppSelector } from "../store"
import { useLocation } from "react-router-dom"
import UserDropdown from "./userDropdown"
import SwitchTheme from "./switchTheme"
import SearchBar from "./searchBar"

const Header = () => {
    const { isAuth } = useAppSelector(state => state.auth)
    const location = useLocation()
    const { colorMode } = useColorMode()

    return (
        <Grid as={'header'} templateColumns={'15vw 1fr 15vw'} p={'1rem'} bg={colorMode === 'light' ? 'smoke.300' : 'smoke.800'}>
            <Center>
                <Link href="/" fontSize={'2xl'} fontWeight="black" _hover={{opacity: 0.5}} >
                    GenG Music
                </Link>
            </Center>
            <Center>
                {location.pathname === '/create-playlist' && <SearchBar/>}
            </Center>
            <Center>
                { isAuth ? <UserDropdown/> : <SwitchTheme withIcon />}
            </Center>
        </Grid>
    )
}

export default Header
