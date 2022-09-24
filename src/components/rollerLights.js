import React, { useEffect, useState } from "react"
import { Stack, Box, Paper, Typography, Button } from "@mui/material"
import { styled } from '@mui/material/styles'

const BAR_ON = "#2cdd00"
const BAR_OFF = "#092c00"
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#092c00',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const RollerLights = ({min, max, number}) => {
    const [count, setCount] = useState(1)
    const [barColor, setBarColor] = useState([BAR_ON, BAR_OFF, BAR_OFF, BAR_OFF, BAR_OFF, BAR_OFF, BAR_OFF, BAR_OFF, BAR_OFF, BAR_OFF])
    //const [randomNumber, setRandomNumber] = useState(6)

    const rollDice = () => {
        const rando = Math.floor(Math.random() * max) + 1
        roll(min,max,rando)
        console.log("here.")
    }

    const roll = (min, max, number) => {
        let timesRun = 0
        let goingUp = true
        //let isDone = false
        let stage = 1
        const maxRounds = 7
        let currentRound = 1
        const initializeColor = [BAR_ON, BAR_OFF, BAR_OFF, BAR_OFF, BAR_OFF, BAR_OFF, BAR_OFF, BAR_OFF, BAR_OFF, BAR_OFF]
        setBarColor(initializeColor)
        const newBarColor = initializeColor
        const interval = setInterval(() => {

            if (stage === 1) {
            /* Prerolll */
            if(goingUp){
                timesRun++
                newBarColor[timesRun-1] = BAR_ON
                if(timesRun === max){
                    goingUp = false
                    newBarColor[timesRun-1] = BAR_OFF
                    currentRound++
                }

            } else {
                timesRun--
                newBarColor[timesRun-1] = BAR_OFF
                if(timesRun === min){
                    goingUp = true
                    newBarColor[timesRun-1] = BAR_ON
                    currentRound++
                }
            }
            
            if(currentRound === maxRounds){
                //clearInterval(interval)
                stage = 2
                timesRun = timesRun - 1
                
            }
            setBarColor([...newBarColor])
            setCount(timesRun)
            } else if (stage === 2) {
                /* final roll*/
                timesRun++
                if(timesRun >= number)(
                    clearInterval(interval)
                )
                newBarColor[timesRun-1] = BAR_ON
                setBarColor([...newBarColor])
                setCount(timesRun)

            }

            

        }, 60)
    }



    useEffect(() => {
        // const min = 5
        // const max = 10
        // const diceNumber = 6
        //roll(min,max,number)
        //startRolling(diceNumber)
    }, [])


    return (
        <>
         <Typography sx={{fontFamily : '"Black Ops One", Open Sans', color: 'green', fontSize: 40}}>{count}</Typography>
            
         <Box sx={{  ml:3, mr:3}}>
            <Stack spacing={1}>
                {
                    barColor.map( (value, index) => {
                        return (
                            <Item key={index} sx={{backgroundColor: value}}></Item> 
                        )
                    })
                }
            </Stack>
        </Box>

        <Button sx={{mt:2, color:"green", borderColor:"green"}} variant="outlined" onClick={rollDice}>Random</Button>
        </>
    )
}

export default RollerLights