
import React, { useEffect, useState, forwardRef, useImperativeHandle } from "react"
import {  Paper, Box } from "@mui/material"

import { styled } from '@mui/material/styles'


const Screen = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : '#000000',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: "green",
    overflow: "hidden",
    verticalAlign: "bottom",
    animation : "caret 1s steps(1) infinite",
    "@keyframes caret":{
        "50%": {
            borderColor: "transparent",
        }
    }
    
  }))

  const Blinky = styled('span')(({ theme }) => ({
    borderRight: ".05em solid",
    animation : "caret 1s steps(1) infinite",
    "@keyframes caret":{
        "50%": {
            borderColor: "transparent",
        }
    }
    
  }))



const Terminal = forwardRef(({msg, onDone}, ref) => {
    useImperativeHandle(ref, () => ({
        updateText(newMsg) {
          console.log('child function 1 called');
          textTyper(newMsg)
        },
      }));


    const [screenMsg, setScreenMsg] = useState('')



    
    const textTyper = (newMsg) => {
        onDone(false)
        let i = 0
        const interval = setInterval(() => {
            i++
            //console.log(i, newMsg.length)
            if(i >= newMsg.length){
                onDone(true)
                clearInterval(interval)
            }
            setScreenMsg(newMsg.substring(0,i) )
        }, 70)
    }


    useEffect(() => {
        
        textTyper(msg)
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <Screen sx={{height: 498}}>
                <Box>
                    {screenMsg}<Blinky></Blinky>
                </Box>
            </Screen>
            <Box sx={{height: 100}}>
                
            </Box>
        </>
    )
})

export default Terminal