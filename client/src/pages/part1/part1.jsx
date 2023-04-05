import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import {Box, Typography, Grid} from '@mui/material'
import { getAllData,setPage } from "../../redux/slices/apiSlice"
import CharecterCard from "../../components/Cards/CharacterCard"
import NavPagination from "../../components/navegation/pagination"

export default function Part1() {
    const { data, loading, page, totalPages } = useSelector(state => state.api)
    const dispatch = useDispatch()
    function handleChange(e, value) {
        dispatch(setPage(value))
    }
    function getData() {
        
        dispatch(getAllData(page))
    }
    React.useEffect(() => {
        getData()
       
    }, [page])
    return (
        <Box>
            {
                data.length !== 0 && loading === 'fulfilled' ? (
                    <>
                         <Grid container direction='row'>
                        {
                            data.map(cha => {
                                return (
                                    <Grid item key={ cha.id } sx={{margin: 'auto'}}>
                                      <CharecterCard info={cha} />
                                    </Grid>
                                )
                            })
                        }
                        </Grid>
                        <Box sx={{display: 'flex', width: '100%', justifyContent: 'center'}}>
                            <NavPagination currentPage={page} totalPages={totalPages} handleChange={handleChange} />
                        </Box>
                    </>
                ) : loading === 'rejected' ? (
                        <Box>
                            <Typography variant="h1">Hay un error</Typography>
                        </Box>
                    ) : (
                            <Box>
                                <Typography variant="h1">Cargando</Typography>
                            </Box>
                )
            }
           
        </Box>
    )
}