import React from "react"
import { TextField, Box } from '@mui/material' 


export default function ChoresForm({ input, errors, handleChange }) {
    return (
        <Box>
            <TextField
                label='Nombre de la tarea'
                onChange={(e) => handleChange(e)}
                value={input.title}
                name='title'
                fullWidth
                required
                error={errors.title ? true : false}
                helperText={errors.title ? errors.title : ''}
            />
            <TextField
                label='Describe la tarea'
                onChange={(e) => handleChange(e)}
                value={input.description}
                multiline
                fullWidth
                name='description'
            />
        </Box>
    )
} 