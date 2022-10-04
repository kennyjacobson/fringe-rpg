import React, { useEffect, useRef, useState } from "react"
import { styled } from '@mui/material/styles';
import {  Grid, Paper, Typography, Box } from "@mui/material"
import Roller from "./roller"
import Terminal from "./terminal"
import FringeCard from "./fringeCard"
import FringeCardPic from "./fringeCardPic"
import Buttons from "./buttons"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#1A2027',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "100%",
  }))

const simpleConsoleLog = () => {
    console.log("I'm in the simpleConsoleLog")
}


const Layout = () => {

    const [messageDone, setMessageDone] = useState(false)
    const [rollValue, setRollValue] = useState(0)
    const [rollDisabled, setRollDisabled] = useState(false)
    const gameState = useRef({step : 1, playerHp: 20, npcHp: 20})
    const terminalRef = useRef(null)
    const [button1, setButton1] = useState({"title":"x", "enabled" : false, "onClick": simpleConsoleLog})
    const [button2, setButton2] = useState({"title":"x", "enabled" : false, "onClick": simpleConsoleLog})
    const [button3, setButton3] = useState({"title":"x", "enabled" : false, "onClick": simpleConsoleLog})
    const [button4, setButton4] = useState({"title":"x", "enabled" : false, "onClick": simpleConsoleLog})
    


    const advanceGame = (response) => {
        console.log(gameState.current.step)
        if (gameState.current.step === 1){
            console.log("in state 1")
            terminalRef.current.updateText("So you would like to go up against the Capsized King?")
            setButton1({...button1, title: "Yes", enabled: true, onClick : advanceGame})
            setRollDisabled(true)
            gameState.current.step++
        } else if (gameState.current.step === 2){
            console.log("in state 2")
            terminalRef.current.updateText("You're up. Roll to hit.")
            setButton1({...button1, title: "X", enabled: false, onClick : newGame})
            setRollDisabled(false)
            gameState.current.step++
        }else if (gameState.current.step === 3){
            console.log("in state 3")
            if(response.diceRoll > 6){
                terminalRef.current.updateText("You hit! Roll for damage")
                gameState.current.step = 4
                setButton1({...button1, title: "X", enabled: false, onClick : newGame})
                setRollDisabled(false)

            } else {
                terminalRef.current.updateText("You missed.")
                gameState.current.step = 5
                setButton1({...button1, title: "Continue", enabled: true, onClick : advanceGame})
                setRollDisabled(true)
            }
            //terminalRef.current.updateText(`Congratulations. It looks like you generated a ${response.diceRoll}. If you like, you can keep generating numbers or start over.`)
            
           
        }
        else if (gameState.current.step === 4){
            console.log("in state 4")
            gameState.current.npcHp = gameState.current.npcHp - response.diceRoll
            if(gameState.current.npcHp <= 0){
                gameState.current.npcHp = 0
                gameState.current.step = 10
                terminalRef.current.updateText(`You defeated the Capsized King!!!`)
                setButton1({...button1, title: "Continue", enabled: true, onClick : advanceGame})
                setRollDisabled(true)
            } else {
                terminalRef.current.updateText(`You inflicted ${response.diceRoll} damage. The Capsized King now has ${gameState.current.npcHp} left.`)
                gameState.current.step = 5
                setButton1({...button1, title: "Continue", enabled: true, onClick : advanceGame})
                setRollDisabled(true)
            }
            
            
        }
        else if (gameState.current.step === 5){
            console.log("in state 5")
            setRollDisabled(true)
            if (Math.floor(Math.random() * 20) + 1 > 5){
                const damage = Math.floor(Math.random() * 10) + 1
                gameState.current.playerHp = gameState.current.playerHp - damage
                if(gameState.current.playerHp <= 0){
                    gameState.current.playerHp = 0
                    gameState.current.step = 10
                    terminalRef.current.updateText(`The Capsizd King inflicted ${damage} damage. You have no HP left. You have been defeated by the Capsized King.`)
                }
                else {
                    terminalRef.current.updateText(`The Capsized King scored a hit causing ${damage} damage.`)
                    gameState.current.step = 2
                }

                
            } else {
                terminalRef.current.updateText(`The Capsized King missed you.`)
                gameState.current.step = 2
            }
            
        } else if (gameState.current.step === 10){
            console.log("in state 10")
            setRollDisabled(true)
            terminalRef.current.updateText("Game Over.")
            setButton1({...button1, title: "X", enabled: false, onClick : newGame})
            gameState.current.step++
        }
        else {
        setButton2({...button2, title: "X", onClick : simpleConsoleLog})
        setButton3({...button3, title: "X", onClick : simpleConsoleLog})
        setButton4({...button4, title: "X", onClick : simpleConsoleLog})
        }

    }

    const newGame = () => {
        gameState.current.step = 1
        advanceGame({})
    }

    useEffect(() => {
        advanceGame({})
        

        // eslint-disable-next-line
    }, []) 


    return (
        <>
            <Grid container spacing={1} sx={{pl:2, pr:2}}>
                <Grid xs={3}  item>
                    <Item >
                        <Typography sx={{color: "green"}}>HP: {gameState.current.npcHp}</Typography>
                        <FringeCardPic imgPath={"fringe/capsizedking.png"} title={"Capsized King"} />
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
                        <Terminal ref={terminalRef}  msg={""} onDone={setMessageDone} />
                        <Box sx={{mt:2}}>
                            <Buttons  
                                button1={button1}
                                button2={button2}
                                button3={button3}
                                button4={button4}
                            />
                        </Box>
                    </Item>
                </Grid>
                <Grid xs={2}  item>
                    <Item>
                        <Roller onDone={setRollValue} callback={advanceGame} disabled={rollDisabled}/>
                    </Item>
                </Grid>
                <Grid xs={3}  item>
                    <Item>
                    <Typography sx={{color: "green"}}>HP: {gameState.current.playerHp}</Typography>
                    <Grid container>
                        
                        <Grid item xs={6}>
                            <FringeCard  />
                        </Grid>
                        <Grid item xs={6}>
                        <FringeCardPic  imgPath={"fringe/skrit.jpeg"} title={"Skrit"} />
                        </Grid>
                    </Grid>
                    
                    
                    
                   
                    </Item>
                </Grid>
            </Grid>
            
        </>
    )
}

export default Layout