import React from "react"
import { Typography, Stack, IconButton } from "@mui/material"
// import GpsFixedIcon from '@mui/icons-material/GpsFixed';
// import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
// import PanoramaWideAngleSelectIcon from '@mui/icons-material/PanoramaWideAngleSelect';
// import StopCircleIcon from '@mui/icons-material/StopCircle';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import CircleIcon from '@mui/icons-material/Circle';

const Buttons = ({button1, button2, button3, button4}) => {


    return (
        <>
            
            <Stack direction="row" spacing={1} sx={{justifyContent:"space-between"}}>
            <Stack direction="column" spacing={0}>
                <Typography sx={{backgroundColor: "#050505", color: (button1.enabled) ? "green"  : "#005500"}}>{button1.title}</Typography>
                <IconButton disabled={!button1.enabled} aria-label="a" color="secondary" onClick={button1.onClick} >
                    {
                        (button1.enabled) ? (
                            <CircleIcon  sx={{ fontSize: 80, color: (button1.enabled) ? "green"  : "#005500" }} />
                        ) : (
                            <TripOriginIcon  sx={{ fontSize: 80, color: (button1.enabled) ? "green"  : "#005500" }} />
                        )
                    }
                    
                </IconButton>
            </Stack>

            <Stack direction="column" spacing={0}>
                <Typography sx={{backgroundColor: "#050505", color: (button2.enabled) ? "green"  : "#005500"}}>{button2.title}</Typography>
                <IconButton disabled={!button2.enabled} aria-label="a" color="secondary" onClick={button2.onClick} >
                    <TripOriginIcon  sx={{ fontSize: 80, color: (button2.enabled) ? "green"  : "#005500" }} />
                </IconButton>
            </Stack>

            <Stack direction="column" spacing={0}>
                <Typography sx={{backgroundColor: "#050505",color: (button3.enabled) ? "green"  : "#005500"}}>{button3.title}</Typography>
                <IconButton disabled={!button3.enabled}  aria-label="a" color="secondary" onClick={button3.onClick} >
                    <TripOriginIcon  sx={{ fontSize: 80, color: (button3.enabled) ? "green"  : "#005500" }} />
                </IconButton>
            </Stack>

            <Stack direction="column" spacing={0}>
                <Typography sx={{backgroundColor: "#050505",color: (button4.enabled) ? "green"  : "#005500"}}>{button4.title}</Typography>
                <IconButton disabled={!button4.enabled}  aria-label="a" color="secondary" onClick={button4.onClick} >
                    <TripOriginIcon  sx={{ fontSize: 80, color: (button4.enabled) ? "green"  : "#005500" }} />
                </IconButton>
            </Stack>
            
           
            </Stack>
            
           
        </>
    )
}

export default Buttons