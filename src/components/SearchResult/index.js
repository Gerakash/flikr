import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ImageList, ImageListItem } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'


const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const SearchResult = () => {
  const [photos, setPhotos] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const params = useParams()

  const handlePageChange = (event, value) => {
    setCurrentPage(value)
  }

    useEffect(()=> {
        const perPage = 12
        // const url = `https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=${API_KEY}&text=${params.queryText}&format=json&nojsoncallback=1`
        const url = `https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=${API_KEY}&text=${params.queryText}&format=json&nojsoncallback=1&page=${currentPage}&per_page=${perPage}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setPhotos(data.photos.photo)
            setTotalPages(data.photos.pages)
            console.log(data.photos)
        })
        .catch(err => console.log(err))
    }, [params.queryText, currentPage])



  return (
    <Stack
    direction="column"
    justifyContent="center"
    alignItems="center"
    spacing={4}
    >
      <ImageList>
        {photos.map(photo => (
          <ImageListItem key={photo.id}>
            <img 
            src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_z.jpg`} 
            alt={photo.title} 
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
      />
    </Stack>
  );
};

export default SearchResult;