import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

export default function TimeSlot(props) {
    const [isAvailable, setIsAvailable] = useState(true);
    useEffect(() => {
        let condition = props.currentCapacity === props.maxCapacity;
        setIsAvailable(!condition);
    });

    function AvailableTypography(props) {
        if (props.isAvailable)
            return (<Typography variant="body2" sx={{
                color: '#26D1B3'
            }}>
                Available
            </Typography>);

        else
            return (<Typography variant="body2" sx={{
                color: 'red'
            }}>
                Not Available
            </Typography>)
    }

    return (
        <Card sx={{ minWidth: 280, padding: 1 }}>
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
                <AvailableTypography isAvailable={isAvailable} />

            </CardContent>
            <CardActions>
                <Button disabled={!isAvailable} variant="contained">
                    {isAvailable ? "Book Now" : "Fully booked :("}
                </Button>
            </CardActions>
        </Card>
    );
}