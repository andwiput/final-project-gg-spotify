import { theme as defaultTheme, extendTheme, withDefaultColorScheme} from '@chakra-ui/react'
import { leaf, smoke} from './colors'
import { Button } from './button'
import { Input, Textarea } from './forms'


const theme = extendTheme(
    {
      config: {
        useSystemColorMode: true
      },
      components: {
        Input,
        Textarea,
        Button,
      },
      fonts: {
        body: `'Piazzolla', ${defaultTheme.fonts.body}`,
        heading: `'Piazzolla', ${defaultTheme.fonts.heading}`,
      },
      colors: { leaf, smoke },
      styles: {
        global: ({ colorMode }) => ({
          html: {
            scrollBehavior: 'smooth',
          },
          body: {
            bg: colorMode === 'light' ? 'smoke.200' : 'smoke.900'
          }
        }),
      },
      radii: {
        '4xl': '2rem',
      },
    },
    withDefaultColorScheme({ colorScheme: 'leaf' })
  )
  
  export default theme;