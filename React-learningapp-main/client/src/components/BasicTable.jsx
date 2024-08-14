import { useMemo, useState } from 'react';
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

const BasicTable = () => {
    //should be memoized or stable
    const [data, setDate] = useState([
        {
            name: {
                firstName: 'John',
                lastName: 'Doe',
            },
            address: '261 Erdman Ford',
            city: 'East Daphne',
            state: 'Kentucky',
        },
        {
            name: {
                firstName: 'Jane',
                lastName: 'Doe',
            },
            address: '769 Dominic Grove',
            city: 'Columbus',
            state: 'Ohio',
        },
        {
            name: {
                firstName: 'Joe',
                lastName: 'Doe',
            },
            address: '566 Brakus Inlet',
            city: 'South Linda',
            state: 'West Virginia',
        },
        {
            name: {
                firstName: 'Kevin',
                lastName: 'Vandy',
            },
            address: '722 Emie Stream',
            city: 'Lincoln',
            state: 'Nebraska',
        },
        {
            name: {
                firstName: 'Joshua',
                lastName: 'Rolluffs',
            },
            address: '32188 Larkin Turnpike',
            city: 'Charleston',
            state: 'South Carolina',
        }
    ])

    const columns = useMemo(
        () => [
            {
                accessorKey: 'name.firstName', //access nested data with dot notation
                header: 'First Name',
                size: 150,
            },
            {
                accessorKey: 'name.lastName',
                header: 'Last Name',
                size: 150,
            },
            {
                accessorKey: 'address', //normal accessorKey
                header: 'Address',
                size: 200,
            },
            {
                accessorKey: 'city',
                header: 'City',
                size: 150,
            },
            {
                accessorKey: 'state',
                header: 'State',
                size: 150,
            },
        ],
        [],
    );

    // CREATE action
    const handleCreateCat = async ({ values, table }) => {
        try {
            // Post values to server
            // const response = await axios.post('http://localhost:3001/addCat', values);
            // setData(response.data.rows);
            // setOpenSnackBar({ isOpen: true, action: 'cat added successfully' })
            table.setCreatingRow(null); // Exit creating mode
            window.alert('new entry created!')
        } catch (error) {
            console.error('Error creating Cat:', error);
        }
    };

    // UPDATE action
    const handleSaveCat = async ({ values, table }) => {
        const rowId = values.id;
        try {
            // Post values to server
            // const response = await axios.put(`http://localhost:3001/updateCat/${rowId}`, values);
            // setData(response.data.rows);
            // setOpenSnackBar({ isOpen: true, action: 'cat edited successfully' })
            table.setEditingRow(null); // Exit editing mode
            window.alert('entry updated!')
        } catch (error) {
            console.error('Error updating cat:', error);
        }
    };

    // DELETE action
    const openDeleteConfirmModal = async (row) => {
        // const rowId = row.original.id;
        if (window.confirm('Are you sure you want to delete this cat?')) {
            try {
                //     const response = await axios.delete(`http://localhost:3001/deleteCat/${rowId}`);
                //     setData(response.data.rows);
                console.log('row deleted!!')
                window.alert('row deleted!!')
                // setOpenSnackBar({ isOpen: true, action: 'cat removed successfully' })
            } catch (error) {
                console.error('Error deleting cat:', error);
            }
        }
    };


    const table = useMaterialReactTable({
        columns,
        data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        createDisplayMode: 'modal',
        editDisplayMode: 'modal',
        enableColumnActions: false,
        enableColumnFilters: false,
        enablePagination: false,
        enableSorting: false,
        enableEditing: true,
        enableTopToolbar: false,
        enableBottomToolbar: false,

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
        },
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
        onCreatingRowSave: handleCreateCat,
        onEditingRowSave: handleSaveCat,
    });

    return (
        <div>
            <MaterialReactTable table={table} />
            <div style={{ marginTop: '10px' }}>
                <Button
                    variant="contained"
                    onClick={() => {
                        table.setCreatingRow(true);
                    }}
                >
                    Create New Cat
                </Button>
            </div>
        </div>
    )
};

export default BasicTable;
