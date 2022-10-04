import React from "react"
import { Typography,  Card, CardActionArea, CardMedia, CardContent, Grid } from "@mui/material"

const FringeCard = ({onDone, callback}) => {
    return (
        <>
            <Card sx={{ml:1, mr:1, mt:2, textAlign : "left"}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="180"
                    image="fringe/drifter0135.jpg"
                    alt="fringe drifter #135"
                    />
                    <CardContent sx={{backgroundColor:"beige"}}>
                    <Typography gutterBottom variant="h6" component="div">
                        Drifter #0135
                    </Typography>
                    <Grid spacing={2} container>
                        <Grid item xs={6}>
                            <Typography variant="body" color="text.secondary" >
                                <strong>HP:</strong> 20
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body" color="text.secondary" >
                            <strong>AC:</strong> 14
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body" color="text.secondary" >
                            <strong>Headgear:</strong> None
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body" color="text.secondary" >
                                <strong>Weapon:</strong> Nozzle
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body" color="text.secondary" >
                                <strong>Suit:</strong> Prongshell
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body" color="text.secondary" >
                                <strong>Backpack:</strong> Bobpack
                            </Typography>
                        </Grid>

                    </Grid>
                    
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}

export default FringeCard