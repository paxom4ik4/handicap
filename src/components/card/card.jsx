import React from 'react';

import './index.css';
import {Button, CardActions, CardContent, Typography, Card} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const CardComponent = ({ title, subtitle, text }) => {
    const navigate = useNavigate();

    return (
        <Card variant={"outlined"} sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Новость дня
                </Typography>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {subtitle}
                </Typography>
                <Typography variant="body2">
                    {text}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => navigate('/members')} size="small">Подробнее</Button>
            </CardActions>
        </Card>
    )
}
