import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import { provincias } from '../models/provincias.js';

const ProvinciaSelect = ({ value, onChange, error, helperText, name = 'provincia' }) => {
    return (
        <FormControl fullWidth margin="normal" error={!!error} required>
            <InputLabel id="provincia-label">Provincia</InputLabel>
            <Select
                labelId="provincia-label"
                label="Provincia"
                name={name}
                value={value}
                onChange={onChange}
            >
                {provincias.map(({ value, label }) => (
                    <MenuItem key={value} value={value}>
                        {label}
                    </MenuItem>
                ))}
            </Select>
            {error && (
                <Typography variant="caption" color="error" sx={{ mt: 0.5 }}>
                    {helperText}
                </Typography>
            )}
        </FormControl>
    );
};

export default ProvinciaSelect;
