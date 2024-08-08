import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


export default function OrdersTab({ selectedTab, tabs }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    selectedTab(newValue)
  };


  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', width: 'fit-content' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{
          '& .MuiTab-root': {
            // Default tab styles
          },
          '& .MuiTab-root:hover': {
            backgroundColor: '#f0f0f0', // Hover background color
          },
        }}>
          {tabs.map((tab, index) => {
            return (
              <Tab key={index} label={tab} />
            )
          })}
        </Tabs>
      </Box>

      {/* {tabs.map((tab, i) => {
        return (
        <CustomTabPanel value={value} index={i}>
          {tab}
        </CustomTabPanel>
        )
      })} */}

    </Box>
  );
}