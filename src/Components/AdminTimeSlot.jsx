import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

export default function TimeSlot(props) {
    return (
        <Card sx={{ minWidth: 220, padding: 1}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Time Slot
                </Typography>
                <Typography variant="h5" component="div">
                    {props.startTime} - {props.endTime}
                </Typography>
                <Typography variant="body2">
                    Capacity: {props.currentCapacity} / {props.maxCapacity}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="error">Delete</Button>
            </CardActions>
        </Card>
    );
}