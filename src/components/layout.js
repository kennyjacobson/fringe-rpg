import React from "react"
import { styled } from '@mui/material/styles';
import {  Grid, Paper } from "@mui/material"
import Roller from "./roller"

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#1A2027',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))



const Layout = () => {


    return (
        <>
            <Grid container spacing={1} sx={{pl:2, pr:2}}>
                <Grid xs={3}  item>
                    <Item>
                        Fringe Drifters
                    </Item>
                </Grid>
                <Grid xs={4}  item>
                    <Item>
                        C01
                    </Item>
                </Grid>
                <Grid xs={2}  item>
                    <Item>
                        <Roller/>
                    </Item>
                </Grid>
                <Grid xs={3}  item>
                    <Item>
                    asdf
                    </Item>
                </Grid>
            </Grid>
            
        </>
    )
}

export default Layout