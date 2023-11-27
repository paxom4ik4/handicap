import React from 'react';

import './member.css';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export const Member = ({ title, text, img }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="320"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography style={{ height: '60px'}} gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography style={{ height: '100px'}} variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
