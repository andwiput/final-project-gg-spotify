import { Switch, useColorMode } from "@chakra-ui/react"

const SwitchTheme = () =>{
    const { colorMode, toggleColorMode } = useColorMode()

    return <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
}

export default SwitchTheme