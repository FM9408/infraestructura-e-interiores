import { Card, CardContent, Typography, Box } from "@mui/material"
import { Link } from "react-router-dom"


export default function CharecterCard({ info }) {
    return (
        <Link to={`/${info.id}/details`} style={{textDecoration: 'none'}}>
            <Card sx={{ maxWidth: 340, maxHeight: 440, display: 'inline-flex', justifyContent: 'center', textAlign: 'center'}}>
             
      <CardContent>
       <Box sx={{width: '100%'}}>
                <Typography gutterBottom variant="h5" component="div" >
          {info.name}
        </Typography> 
            </Box>
            <Box sx={{width: 'fit-content'}}>
                <img
        sx={{ maxHeight: 140, objectFit: 'contain' }}
        src={info.image}
        alt={`imagen de ${info.name}`}
      />
            </Box>
                <Box sx={{width: '100%'}}>
                    <Typography variant="body2" color="text.secondary">
          {info.species} - {info.status}
        </Typography>
                </Box>
      </CardContent>
      
    </Card>
        </Link>
    )
}