import React from "react"
import RollerLights from "./rollerLights"
import logo from '../logo.svg';
import { Typography, Box } from "@mui/material"

const Roller = () => {


    return (
        <>
            
            <Typography sx={{fontFamily : '"Monoton", Open Sans', color: 'green', fontSize: 40}}>Fringe Drifters</Typography>
            <RollerLights min={2} max={10} number={2}/>
         
            <Box>
            <img src={logo} className="App-logo" alt="logo" />
            </Box>
            
           
        </>
    )
}

export default Roller