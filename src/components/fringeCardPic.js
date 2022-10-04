import React from "react"
import { Typography,  Card, CardActionArea, CardMedia, CardContent } from "@mui/material"

const FringeCardPic = ({imgPath, title, onDone, callback}) => {
    return (
        <>
            <Card sx={{ml:1, mr:1, mt:2, textAlign : "left"}}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="292"
                    image={imgPath}
                    alt={title}
                    />
                    <CardContent sx={{backgroundColor:"beige"}}>
                    <Typography gutterBottom variant="h6" component="div">
                        {title}
                    </Typography>
             
                    
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    )
}

export default FringeCardPic