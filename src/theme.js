import { createContext, useState, useMemo } from "react";
import { createTheme } from  "@mui/material/styles"

// color design tokens


export  const tokens = (mode) => ({

...(mode ==="light" ? {
      white: {100: "#FFFFFF"},
    primary: {
        100: "#fff5d4",
        200: "#ffebaa",
        300: "#ffe07f",
        400: "#ffd655",
        500: "#ffcc2a",
        600: "#cca322",
        700: "#997a19",
        800: "#665211",
        900: "#332908"
    },
    grey: {
        100: "#d9d9d9",
        200: "#b3b3b3",
        300: "#8e8e8e",
        400: "#686868",
        500: "#424242",
        600: "#353535",
        700: "#282828",
        800: "#1a1a1a",
        900: "#0d0d0d"
    },
    black: {
        100: "#d1d1d1",
        200: "#a4a4a4",
        300: "#767676",
        400: "#494949",
        500: "#1b1b1b",
        600: "#161616",
        700: "#101010",
        800: "#0b0b0b",
        900: "#050505"
    },
}: {
    white: {100: "#000000"},
    primary: {
        100: "#332908",
        200: "#665211",
        300: "#997a19",
        400: "#cca322",
        500: "#ffcc2a",
        600: "#ffd655",
        700: "#ffe07f",
        800: "#ffebaa",
        900: "#fff5d4",
    },
    grey: {
        100: "#0d0d0d",
        200: "#1a1a1a",
        300: "#282828",
        400: "#353535",
        500: "#424242",
        600: "#686868",
        700: "#8e8e8e",
        800: "#b3b3b3",
        900: "#d9d9d9",
    },
    black: {
        100: "#050505",
        200: "#0b0b0b",
        300: "#101010",
        400: "#161616",
        500: "#1b1b1b",
        600: "#494949",
        700: "#767676",
        800: "#a4a4a4",
        900: "#d1d1d1",
    },
})
})

//mui theme settings

export const themeSettings =(mode)=>{
    const colors = tokens(mode)
    return{
        palette:{
            mode:mode,
            ...(mode="light"
            ? {
                primary:{
                    main:colors.primary[500],
                },
                black:{
                    main:colors.black[500],
                },
                grey:{
                    main:colors.grey[500]
                },
                background:{
                    default:colors.grey[100]
                }
            }:{
                primary:{
                    main:colors.primary[500],
                },
                black:{
                    main:colors.black[500],
                },
                grey:{
                    main:colors.grey[500]
                },
                background:{
                    default:"white"
                } 
            }),
        },

        typography:{
            fontFamily:[ "Satoshi", "Roboto", "san-serif"].join(","),
            fontSize:12,

            h1:{
                fontFamily:["SatoshiBold","Roboto", "san-serif"].join(","),
                fontSize:40,  
            },
            h2:{
                fontFamily:["Roboto", "san-serif"].join(","),
                fontSize:32,  
            },
            h3:{
                fontFamily:["SatoshiBold","Roboto", "san-serif"].join(","),
                fontSize:28,  
            },
            h4:{
                fontFamily:["Satoshi", "Roboto", "san-serif"].join(","),
                fontSize:18,  
            },
            h5:{
                fontFamily:["Satoshi","Roboto", "san-serif"].join(","),
                fontSize:12,  
            },
            h6:{
                fontFamily:["Satoshi", "Roboto", "san-serif"].join(","),
                fontSize:10,  
            },
            h7:{
                fontFamily:["SatoshiBold", "Roboto", "san-serif"].join(","),
                fontSize:20,  
            },
            h8:{
                fontFamily:["Satoshi", "Roboto", "san-serif"].join(","),
                fontSize:16,  
            },
        }
    }
}

export const ColorModeContext = createContext({
    toggleColorMode: ()=>{}
})

export const useMode = () => {
    const [mode, setMode] = useState("light")

    const colorMode = useMemo(
        ()=>({
            toggleColorMode:() =>
            setMode((prev)=> ( prev ==="dark" ? "light" : "dark"))   
        }),
        []
    )

    const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode])

    return [theme, colorMode]
}
