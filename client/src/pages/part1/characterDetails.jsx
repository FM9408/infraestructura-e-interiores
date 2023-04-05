import { Container, Box, Paper, Typography, Divider, Grid, IconButton } from "@mui/material"
import React from "react"
import {ArrowBack} from '@mui/icons-material'
import { useNavigate, useParams } from "react-router-dom"
import { getCharacterDetail } from "../../redux/slices/apiSlice"
import { useDispatch, useSelector } from "react-redux"

export default function CharacterDetail() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(true)
    const {detail} = useSelector(state => state.api)
    
    React.useEffect(() => {
        setLoading(true)
        dispatch(getCharacterDetail(id))
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [id, dispatch])

    return (
        <Container>
            <Box>
                <Paper sx={{ display: 'flex', justifyContent: 'center' }}>
                    <IconButton onClick={() => navigate('/parte1')}>
                        <ArrowBack />
                    </IconButton>
                    {
                        loading === false ? <Grid container direction={'row'}>
                        <Grid item>
                            <img src={detail.image} alt={`imagen de ${detail.name}`} />
                        </Grid>
                        <Grid item sx={{mx: 'auto'}}>
                            
                                <Grid container direction={'column'} sx={{textAlign: 'center'}}>
                                <Grid item>
                                    <Typography variant="h3">{detail.name}</Typography>
                                </Grid>
                                <Divider />
                                <Grid item>
                                        <Typography variant="h5" sx={{ display: 'block' }}>Especie: {detail.species}</Typography>
                                        <Typography variant="h5" sx={{ display: 'block' }}>Género: {detail.gender}</Typography>
                                        <Typography variant="h5" sx={{ display: 'block' }}>Estado: {detail.status === 'Alive' ? 'Vivo' : detail.status === 'unknown' ? 'Desconocido' : 'Muerto'}</Typography>
                                        <Typography variant="h5" sx={{ display: 'block' }}>Origen: {detail.origin.name}</Typography>
                                        <Typography variant='h5' sx={{ display: 'block' }}> Nº de episodios: {detail.episode.length }</Typography>

                                </Grid>
                            </Grid>
                           
                        </Grid>
                    </Grid> : <Typography variant="h1">Cargando</Typography>
                    }
                </Paper>
            </Box>
        </Container>
    )
}