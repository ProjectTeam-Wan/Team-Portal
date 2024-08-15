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
    Grid,
    TextField,
    Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Test from './Test';

const BasicTable = () => {
    const [oppEdges, setOppEdges] = useState({
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
    });

    const [data, setData] = useState([
        {
            name: {
                firstName: 'John',
                lastName: 'Doe',
            },
            address: '261 Erdman Ford',
            city: <Test list={Object.keys(oppEdges)} />,
            state: <Test list={Object.values(oppEdges)} />,
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
        // Other rows...
    ]);

    // State to manage the editable oppEdges
    const [editableOppEdges, setEditableOppEdges] = useState(
        Object.entries(oppEdges).map(([key, value]) => ({ key, value }))
    );

    const columns = useMemo(
        () => [
            {
                accessorKey: 'name.firstName',
                header: 'First Name',
                size: 150,
            },
            {
                accessorKey: 'name.lastName',
                header: 'Last Name',
                size: 150,
            },
            {
                accessorKey: 'address',
                header: 'Address',
                size: 200,
            },
            {
                accessorKey: 'city',
                header: 'City',
                size: 150,
                Edit: () => null,
            },
            {
                accessorKey: 'state',
                header: 'State',
                size: 150,
                Edit: () => null,
            },
        ],
        []
    );

    const handleCreateCat = async ({ values, table }) => {
        try {
            // Logic for creating a new row
            table.setCreatingRow(null);
            window.alert('new entry created!');
        } catch (error) {
            console.error('Error creating Cat:', error);
        }
    };

    const handleSaveCat = async ({ values, table }) => {
        try {
            // Update the oppEdges and reflect it in the data
            const newOppEdges = Object.fromEntries(editableOppEdges.map(({ key, value }) => [key, value]));
            setOppEdges(newOppEdges);
            setData(prevData =>
                prevData.map(item =>
                    item.name.firstName === values.name.firstName
                        ? { ...item, city: <Test list={Object.keys(newOppEdges)} />, state: <Test list={Object.values(newOppEdges)} /> }
                        : item
                )
            );
            table.setEditingRow(null);
            window.alert('entry updated!');
        } catch (error) {
            console.error('Error updating cat:', error);
        }
    };

    const openDeleteConfirmModal = async (row) => {
        if (window.confirm('Are you sure you want to delete this cat?')) {
            try {
                // Logic for deleting a row
                console.log('row deleted!!');
                window.alert('row deleted!!');
            } catch (error) {
                console.error('Error deleting cat:', error);
            }
        }
    };

    const handleEditableOppEdgesChange = (index, field, value) => {
        setEditableOppEdges(prev =>
            prev.map((item, i) =>
                i === index ? { ...item, [field]: value } : item
            )
        );
    };

    const handleAddKeyValue = () => {
        setEditableOppEdges(prev => [...prev, { key: '', value: '' }]);
    };

    const handleRemoveKeyValue = (index) => {
        setEditableOppEdges(prev => prev.filter((_, i) => i !== index));
    };

    const table = useMaterialReactTable({
        columns,
        data,
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
                header: 'Actions',
                size: 100,
                muiTableHeadCellProps: {
                    align: 'center',
                },
                muiTableBodyCellProps: {
                    align: 'center',
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
                    <Typography variant="h6">Edit oppEdges</Typography>
                    <Grid container spacing={2}>
                        {editableOppEdges.map((entry, index) => (
                            <Grid item xs={12} key={index}>
                                <Grid container spacing={2}>
                                    <Grid item xs={5}>
                                        <TextField
                                            label="Key"
                                            value={entry.key}
                                            onChange={(e) => handleEditableOppEdgesChange(index, 'key', e.target.value)}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={5}>
                                        <TextField
                                            label="Value"
                                            type="number"
                                            value={entry.value}
                                            onChange={(e) => handleEditableOppEdgesChange(index, 'value', e.target.value)}
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <Button
                                            color="error"
                                            onClick={() => handleRemoveKeyValue(index)}
                                        >
                                            Remove
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}
                        <Grid item xs={12}>
                            <Button variant="outlined" onClick={handleAddKeyValue}>
                                Add Key-Value Pair
                            </Button>
                        </Grid>
                    </Grid>
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
    );
};

export default BasicTable;
