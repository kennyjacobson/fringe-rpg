import React from "react"
import RollerLights from "./rollerLights"
import logo from '../logo.svg';
import { Typography, Box } from "@mui/material"

const Roller = ({onDone, callback}) => {


    return (
        <>
            
            <Typography sx={{fontFamily : '"Monoton", Open Sans', color: 'green', fontSize: 40}}>Drop Number</Typography>
            <RollerLights min={3} max={10} number={2} onDone={onDone} callback={callback}/>
         
            <Box>
            <img src={logo} className="App-logo" alt="logo" />
            </Box>
            
           
        </>
    )
}

export default Roller