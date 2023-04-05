import { Box, Button, Stack } from "@mui/material"
import React from "react"
import { LandingPageButtonsVar } from "../../../variables/landingPageButtons"
import { useNavigate } from "react-router-dom"


export default function LandingPageButtons() {
    const navigate = useNavigate()
    const buttons = LandingPageButtonsVar({navigate: navigate})

    return (
        
            <Box sx={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                <Stack direction='row' spacing={2} sx={{width: '100%'}}>
                    {
                        buttons.map(button => {
                            return (
                                <Button variant="contained" color="primary" key={button.title } onClick={button.action} sx={{width: `100%`}}>{button.title}</Button>
                            )
                        })
                    }
                </Stack>
            </Box>
      
    )
}