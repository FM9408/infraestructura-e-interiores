import React from 'react'
import { Box, Button, Container, Divider, Typography, Paper, Stack, IconButton, useTheme, TextField } from '@mui/material'
import ChoresForm from '../../components/forms/choresForm'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { showShores} from '../../redux/slices/choresSilce'
import {CheckBox, Delete, Edit} from '@mui/icons-material'

export default function Part2() {
    const [input, setInput] = React.useState({
        title: '',
        description: ''
    })
    const [edit, setEditText] = React.useState({
        title: '',
        description: ''
    })
    const theme = useTheme()
    const  [isEdit, setEdit] = React.useState(false)
    const dispatch = useDispatch()
    const {chores, loading} = useSelector(state => state.chores)
    const [disable, setDisable] = React.useState(true)
    const [errors, setErrors] = React.useState({})
    const [seeChores, setChores] = React.useState([])

    function validate(input) {
        let errors = {}
        if (!input.title) {
            errors.title = 'La tarea require un titulo'
        }
        return errors
    }
    function handleChange(e) {
        setErrors(() => validate({
                ...input,
                [e.target.name]: e.target.value
        }))
        if (Object.keys(errors).length >= 1) {
            setDisable(true)
        } else {
            setDisable(false)
        }
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
         
        
    }
    function handleChangeEdit(e) {
     
        
        setEditText({
            ...edit,
            [e.target.name]: e.target.value
        })
         
        
    }

    async function toggleComplete(id) {
        try {
            await axios.put(`${process.env.REACT_APP_BASE_URL}/chores/update/complete?chore=${id}`)
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/chores/`)
            dispatch(showShores(response.data))
        } catch (error) {
            console.log(error)
        }
    }
     async function deleteChore(id) {
        try {
            await axios.delete(`${process.env.REACT_APP_BASE_URL}/chores/delete?chore=${id}`)
            const allChores = await axios.get(`${process.env.REACT_APP_BASE_URL}/chores`)
            dispatch(showShores(allChores.data))
           
        } catch (error) {
            console.log(error)
        }
    }

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            await axios.post(`${process.env.REACT_APP_BASE_URL}/chores/create`, input)
            const allChores = await axios.get(`${process.env.REACT_APP_BASE_URL}/chores`)
            dispatch(showShores(allChores.data))
            setInput({
                title: '',
                description: ''
            })
        } catch (error) {
            console.log(error)
        }
    }
    

     async function handleSubmitEdit(e, id) {
        e.preventDefault()
        try {
            await axios.put(`${process.env.REACT_APP_BASE_URL}/chores/update?chore=${id}`, edit)
            const allChores = await axios.get(`${process.env.REACT_APP_BASE_URL}/chores`)
            dispatch(showShores(allChores.data))
            setEdit(false)
            setEditText({
                title: '',
                description: ''
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        async function firstFetch() {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/chores`)
            if (response.data.length >0) {
                 dispatch(showShores(response.data))
            }
        }
        if (chores.length === 0 && loading === true) {
            
            firstFetch()
        } else {
            setChores(chores)
        }
    }, [dispatch, chores, loading])
    return (
        <Container >
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <Typography variant='h1'>TO-DO App</Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', py: '1%'}}>
                <ChoresForm input={input} handleChange={handleChange} errors={errors} />
                <Button disabled={disable} variant='contained' color='secondary' onClick={(e) => handleSubmit(e)}>Enviar</Button>
            </Box>
            <Box>
                {
                    seeChores.map(chore => {
                        return (
                            <Paper key={chore.id} sx={{my: '2%'}}>
                                {
                                    !isEdit ? <Box sx={{textAlign: 'center', padding: '1%'}}><Typography variant='h5'>{chore.title}</Typography>
                                <Divider /> 
                                        <Typography variant='body1'>{chore.description}</Typography>
                                       
                                        <Paper sx={{marginTop:'2%'}}><Stack direction={'row'} sx={{display: 'flex', justifyContent: 'space-between'}}>
                                    <IconButton onClick={() =>toggleComplete(chore.id)} sx={{ color: chore.isCompleted === true ? theme.palette.green[500] : theme.palette.secondary.main }}><CheckBox /></IconButton>
                                <IconButton onClick={() => deleteChore(chore.id)} sx={{ color: theme.palette.secondary.main }}><Delete/></IconButton>
                                            <IconButton onClick={() => {
                                                setEdit(true)
                                                setEditText(chore)
                                            } } sx={{ color: theme.palette.secondary.main }}><Edit /></IconButton>
                                </Stack></Paper>
                                </Box> :  <> <TextField
                label='Nombre de la tarea'
                onChange={(e) => handleChangeEdit(e)}
                value={edit.title}
                name='title'
                fullWidth
                required
                helperText={errors.title ? errors.title : ''}
            />
            <TextField
                label='Describe la tarea'
                onChange={(e) => handleChangeEdit(e)}
                value={edit.description}
                multiline
                fullWidth
                name='description'
                                            />
                                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                                <Button variant='contained' color='secondary' onClick={(e) => handleSubmitEdit(e, chore.id)}>Enviar</Button>
                                            <Button variant='contained' color='secondary' onClick={(e) => setEdit(false)}>Cancelar</Button>
                                            </Box>
                                        </>
                                }
                            </Paper>
                        )
                    })
                }
            </Box>
    </Container>
   )
}