import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DatePick({ onChange, dates }) {
  const [selectedDate, setSelectedDate] = useState('');

  const handleChange = (event) => {
    setSelectedDate(event.target.value);
    onChange(event.target.value)
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, backgroundColor: 'white' }}>
        <Select
          value={selectedDate}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="">
            <em>Select Date</em>
          </MenuItem>
          {dates.map((date, index) => {
            return (
              <MenuItem key={index} value={date}> {date} </MenuItem>
            )
          })
          }
        </Select>
      </FormControl>
    </div>
  );
}
