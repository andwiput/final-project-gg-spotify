import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Flex, Icon, Switch, useColorMode } from "@chakra-ui/react"

const SwitchTheme = ({withIcon = false}: {withIcon?:boolean}) =>{
    const { colorMode, toggleColorMode } = useColorMode()

    return(
        <Flex>
            <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
            {withIcon && <Icon ml={4} as={colorMode === 'dark' ? MoonIcon : SunIcon}></Icon>}
        </Flex>
    ) 
}

export default SwitchTheme