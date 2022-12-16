//icons
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PoolIcon from '@mui/icons-material/Pool';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';

export default function ServicesTabs(props) {
    const [serviceType, _setServiceType] = useState(0);

    const setServiceType = (serviceType) => {
        _setServiceType(serviceType);
        
        // callback:
        props.callback(serviceType);
    }

    if (props.isDorms)
        return (
            <Tabs
                value={serviceType}
                onChange={(e, newValue) => setServiceType(newValue)}
                aria-label="icon position tabs example"
                orientation="vertical"
            >
                <Tab icon={<LocalLaundryServiceIcon />} iconPosition="start" label="Laundry" />
                <Tab icon={<DryCleaningIcon />} iconPosition="start" label="Room Cleaning" />
                <Tab icon={<FitnessCenterIcon />} iconPosition="start" label="Gym" />
                <Tab icon={<PoolIcon />} iconPosition="start" label="Pool" />
            </Tabs>
        );
    else
    return (
        <Tabs
            value={serviceType}
            onChange={(e, newValue) => setServiceType(newValue)}
            aria-label="icon position tabs example"
            orientation="vertical"
        >
            <Tab icon={<FitnessCenterIcon />} iconPosition="start" label="Gym" />
            <Tab icon={<PoolIcon />} iconPosition="start" label="Pool" />
        </Tabs>
    );
}