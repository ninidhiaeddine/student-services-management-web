import * as React from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro/DesktopDateRangePicker';

export default function ResponsiveDateRangePicker() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <Stack spacing={3}>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        localeText={{ start: 'Desktop start', end: 'Desktop end' }}
      >
        <DesktopDateRangePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </Stack>
  );
}