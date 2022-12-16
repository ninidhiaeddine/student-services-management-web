import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';

export default function StudentTimeSlot(props) {
    const [isAvailable, setIsAvailable] = useState(true);
    const [open, setOpen] = useState(false);

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

    function handleBookNow(event) {
        setOpen(true);
    }

    return (
        <div>
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
                    <Button disabled={!isAvailable} variant="contained" onClick={handleBookNow}>
                        {isAvailable ? "Book Now" : "Fully booked :("}
                    </Button>
                </CardActions>
            </Card>

            {/* dialog */}
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirm Booking"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you would like to confirm the following booking?
                        <Grid container sx={{marginTop: 3}}>
                            <Grid item xs={6}>
                                <p>Time Slot: </p>
                            </Grid>
                            <Grid item xs={6}>
                                <p style={{fontWeight: 'bold'}}>{props.startTime} - {props.endTime}</p>
                            </Grid>
                            <Grid item xs={6}>
                                <p>Service: </p>
                            </Grid>
                            <Grid item xs={6}>
                                <p style={{fontWeight: 'bold'}}>{props.serviceType}</p>
                            </Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={() => {
                        setOpen(false);
                        props.bookingCallback(props.index);
                    }} autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>

    );
}