import { Outlet, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Stack from '@mui/material/Stack'
import Container  from '@mui/material/Container'

const SearchPage = () => {

    const [query, setQuery] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search/${query}`)
    }
    return (
        <Container maxWidth='md' sx={{textAlign:'center'}}>
            <h1>Flicker Search</h1>
            <form onSubmit={handleSubmit}>
                <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                >
                    <TextField
                    id='search-filled'
                    size='small'
                    label='Search'
                    variant="outlined"
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                    />
                    <Button variant="outlined" type='submit' size='large'>Search</Button>
                </Stack>
            </form>
            <Outlet/>
        </Container>
    );
};

export default SearchPage;