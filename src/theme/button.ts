import { ComponentStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const Button: ComponentStyleConfig = {
    baseStyle: {
        borderRadius: 'full',
    },
    variants: {
        solid: props => ({
            bg: mode('leaf.500', 'leaf.600')(props),
            _hover: {
                bg: mode('leaf.400','leaf.700')(props),
                _disabled:{
                    bg: mode('leaf.400', 'leaf.700')(props),
                }
            }
        }),
        ghost: {
            color: 'leaf.400',
            _hover: {
                color: 'leaf.300'
            }
        }
    }
}