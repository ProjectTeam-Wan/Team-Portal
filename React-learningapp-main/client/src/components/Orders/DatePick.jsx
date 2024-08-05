import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DatePick({ date, dates }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [datesList, setDatesList] = useState([])

  const handleChange = (event) => {
    setSelectedDate(event.target.value);
    date(event.target.value)
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
            <em>בחר תאריך</em>
          </MenuItem>
          {dates.map((date) => {
            return(
              <MenuItem value={date}> {date} </MenuItem>
            )
          })
          }
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
}
