import {extendTheme} from "@chakra-ui/react";
export const theme = extendTheme( {
    colors: {
        primaryDark: '#1A120B',
        primaryMedium: '#3C2A21',
        primaryLight: '#D5CEA3',
        primaryText: '#E5E5CB',
        transparent: 'transparent',
    },
    styles: {
        global: {
            'html, body': {
                backgroundColor: '#1A120B',
            },
            p: {
                color: '#E5E5CB',
            },
        },
    },
})
