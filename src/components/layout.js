import React, { useEffect, useRef, useState } from "react"
import { styled } from '@mui/material/styles';
import {  Grid, Paper, Typography, Box, Button } from "@mui/material"
import Roller from "./roller"
import Terminal from "./terminal"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#1A2027',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))



const Layout = () => {
    const [terminalMessage, setTerminalMessage] = useState("Hello, world.")
    const [messageDone, setMessageDone] = useState(false)
    const [rollValue, setRollValue] = useState(0)
    const gameState = useRef(1)
    const terminalRef = useRef(null);

    const advanceGame = (response) => {
        console.log(gameState.current)
        if (gameState.current === 1){
            console.log("in state 1")
            //setTerminalMessage("Welcome to this game. How about you roll the dice")
            terminalRef.current.updateText("Welcome to this game. How about you generate a drop number?")
            gameState.current++
        }
        else if (gameState.current === 2){
            console.log("in state 2")
            //setTerminalMessage(`Congrates. It looks like you rolled a ${rollValue}`)
            terminalRef.current.updateText(`Congrations. It looks like you generated a ${response.diceRoll}. If you like, you can keep generating numbers.`)
            gameState.current++
        }
        else if (gameState.current === 3){
            console.log("in state 3")
            terminalRef.current.updateText(`This time you generated a ${response.diceRoll}.`)
            //gameState.current++
        }

    }

    const newGame = () => {
        gameState.current = 1
        advanceGame({})
    }

    useEffect(() => {
        advanceGame({})
    }, [])


    return (
        <>
            <Grid container spacing={1} sx={{pl:2, pr:2}}>
                <Grid xs={3}  item>
                    <Item>
                        <Typography>Opponents Cards</Typography>

                        {
                            (messageDone) ? (
                                <Typography>Done!</Typography>
                            ) : (
                                <Typography>Waiting....</Typography>
                            )
                        }

{
                            (rollValue === 0) ? (
                                <Typography>Rolling....</Typography>
                            ) : (
                                <Typography>Rolled a: {rollValue}</Typography>
                            )
                        }

                    </Item>
                </Grid>
                <Grid xs={4}  item>
                    <Item>
                        <Terminal ref={terminalRef}  msg={terminalMessage} onDone={setMessageDone} />
                    </Item>
                </Grid>
                <Grid xs={2}  item>
                    <Item>
                        <Roller onDone={setRollValue} callback={advanceGame}/>
                    </Item>
                </Grid>
                <Grid xs={3}  item>
                    <Item>
                    <Box sx={{height: 100}}>
                        <Typography>Opponents Cards</Typography>
                        <Button onClick={newGame}>Start Over</Button>
                    </Box>
                    </Item>
                </Grid>
            </Grid>
            
        </>
    )
}

export default Layout