import React, { useState } from 'react';
import { TextField, Grid } from '@mui/material';

interface FilterProps {
    onFilterChange: (filters: { param: string; }) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {

    const [param, setParam] = useState('');
    const handleFilterChange = () => {
        onFilterChange({ param });
    };

    return (
        <Grid sx={{pt: 2}}>
            <Grid item>
                <TextField
                    label="Type here..."
                    variant="outlined"
                    value={param}
                    onChange={(e) => {
                        setParam(e.target.value)
                        handleFilterChange()
                    }}
                />
            </Grid>
        </Grid>
    );
};

export default Filter;
