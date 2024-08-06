import { useMemo, useState, useEffect } from 'react';
import axios from 'axios';
import {
  MRT_EditActionButtons,
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const racks = ['A1', 'A2', 'A3', 'B1', 'B2', 'B3'] // temporary array for racks dropList

const Table = () => {
  const [data, setData] = useState([]);
  const [openSnackBar, setOpenSnackBar] = useState({
    isOpen: false,
    action: ''
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/getCats'); // get request from the server
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const columns = useMemo(       // columns definition
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        enableEditing: false,
        size: 100,
        minSize: 140,
        maxSize: 250,
        muiTableHeadCellProps: {
          align: 'left',
        },
        muiTableBodyCellProps: {
          align: 'left',
        },
        Edit: () => null, //Exclud the id column from the edit and create windows
      },
      {
        accessorKey: 'name',
        header: 'Name',
        enableEditing: true,
        size: 200,
        minSize: 140,
        maxSize: 250,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
      },
      {
        accessorKey: 'location',
        header: 'Location',
        enableEditing: true,
        size: 200,
        minSize: 140,
        maxSize: 250,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
      },
      {
        accessorKey: 'rack',
        header: 'Rack',
        enableEditing: true,
        editSelectOptions: racks,
        muiEditTextFieldProps: {
          select: true,
        },
        size: 150,
        minSize: 110,
        maxSize: 250,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
      },
      {
        accessorKey: 'mark',
        header: 'Mark',
        enableEditing: true,
        size: 150,
        minSize: 130,
        maxSize: 250,
        muiTableHeadCellProps: {
          align: 'center',
        },
        muiTableBodyCellProps: {
          align: 'center',
        },
      },
      {
        accessorKey: 'Test',
        header: 'Test',
        enableEditing: true,
        size: 250,
        minSize: 140,
        maxSize: 250,
        muiTableHeadCellProps: {
          align: 'left',
        },
        muiTableBodyCellProps: {
          align: 'left',
        },
      },
      {
        accessorKey: 'Test',
        header: 'Test',
        enableEditing: true,
        size: 300,
        minSize: 140,
        maxSize: 300,
        muiTableHeadCellProps: {
          align: 'left',
        },
        muiTableBodyCellProps: {
          align: 'left',
        },
      },
    ],
    [],
  );

  const handleSnackbarClose = () => {
    setOpenSnackBar({ isOpen: false, action: '' });
  };


  // CREATE action
  const handleCreateCat = async ({ values, table }) => {
    try {
      // Post values to server
      const response = await axios.post('http://localhost:3001/addCat', values);
      setData(response.data.rows);
      setOpenSnackBar({ isOpen: true, action: 'cat added successfully' })
      table.setCreatingRow(null); // Exit creating mode
    } catch (error) {
      console.error('Error creating Cat:', error);
    }
  };

  // UPDATE action
  const handleSaveCat = async ({ values, table }) => {
    const rowId = values.id;
    try {
      // Post values to server
      const response = await axios.put(`http://localhost:3001/updateCat/${rowId}`, values);
      setData(response.data.rows);
      setOpenSnackBar({ isOpen: true, action: 'cat edited successfully' })
      table.setEditingRow(null); // Exit editing mode
    } catch (error) {
      console.error('Error updating cat:', error);
    }
  };

  // DELETE action
  const openDeleteConfirmModal = async (row) => {
    const rowId = row.original.id;
    if (window.confirm('Are you sure you want to delete this cat?')) {
      try {
        const response = await axios.delete(`http://localhost:3001/deleteCat/${rowId}`);
        setData(response.data.rows);
        setOpenSnackBar({ isOpen: true, action: 'cat removed successfully' })
      } catch (error) {
        console.error('Error deleting cat:', error);
      }
    }
  };

  const table = useMaterialReactTable({
    columns,
    data,
    createDisplayMode: 'modal',
    editDisplayMode: 'modal',
    enableEditing: true,
    // enableColumnDragging: true,
    // enableColumnOrdering: true,
    enableColumnResizing: true,
    enableRowNumbers: true,
    // enableRowSelection: true,
    enableStickyHeader: true,
    enableColumnActions: false,
    columnFilterDisplayMode: 'popover',

    muiTableBodyProps: {
      sx: {
        //stripe the rows, make odd rows a darker color
        '& tr:nth-of-type(odd) > td': {
          backgroundColor: '#EEF7FF',
        },
      },
    },
    muiTableBodyCellProps: {
      sx: {
        borderRight: '2px solid #EEEDEB', //add a border between columns
      },
    },
    displayColumnDefOptions: {
      'mrt-row-actions': {
        header: 'Actions', //change header text
        size: 100, //make actions column wider
        muiTableHeadCellProps: {
          align: 'center', //change actions head cell props
        },
        muiTableBodyCellProps: {
          align: 'center', //change actions head cell props
        },
      },
      'mrt-row-numbers': {
        size: 30,
        muiTableHeadCellProps: {
          align: 'center', //change row numbering head cell props
        },
        muiTableBodyCellProps: {
          align: 'center', //change row numbering head cell props
        },
      },
      'mrt-row-select': {
        size: 20,
        muiTableHeadCellProps: {
          align: 'center', //change row select head cell props
        },
        muiTableBodyCellProps: {
          align: 'center', //change row select head cell props
        },
      },
    },
    // positionActionsColumn: 'last', // make the action column to be last position
    getRowId: (row) => row.id,
    muiTableContainerProps: {
      sx: {
        minHeight: '80vh',
        maxHeight: '80vh',
        maxWidth: '81vw' // just for my laptop screen!!!
      },
    },
    onCreatingRowSave: handleCreateCat,
    onEditingRowSave: handleSaveCat,
    renderCreateRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h4">Create New Cat</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {internalEditComponents}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderEditRowDialogContent: ({ table, row, internalEditComponents }) => (
      <>
        <DialogTitle variant="h4">Edit Cat</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {internalEditComponents}
        </DialogContent>
        <DialogActions>
          <MRT_EditActionButtons variant="text" table={table} row={row} />
        </DialogActions>
      </>
    ),
    renderRowActions: ({ row, table }) => (
      <Box sx={{ display: 'flex', gap: '0.5rem' }}>
        <Tooltip title="Edit">
          <IconButton onClick={() => table.setEditingRow(row)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton color="error" onClick={() => openDeleteConfirmModal(row)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Box>
    ),
    renderTopToolbarCustomActions: ({ table }) => (
      <Box sx={{ display: 'flex', gap: '1rem', p: '4px' }}>
        <Button
          variant="contained"
          onClick={() => {
            table.setCreatingRow(true);
          }}
        >
          Create New Cat
        </Button>
      </Box>
    ),

    initialState: {
      columnVisibility: {
        id: false,
      },
      sorting: [
        {
          id: 'id',
          desc: false,
        },
      ],
      columnPinning: { right: ['mrt-row-actions'] },
    },

  });

  return <Box sx={{ width: '100%', height: '100%' }}>
    <MaterialReactTable table={table} />
    <Snackbar
      open={openSnackBar.isOpen}
      autoHideDuration={3000}
      onClose={handleSnackbarClose}
    >
      <Alert
        onClose={handleSnackbarClose}
        severity="success"
        variant="filled"
        sx={{ width: '100%' }}
      >
        {openSnackBar.action}
      </Alert>
    </Snackbar>
  </Box>
};

export default Table;
