import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard'
import { Grid, Stack, Pagination } from '@mui/material'
import { useLocation } from 'react-router-dom'

function ItemsList({ items, mutate }) {
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(9)
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost)
    const [pageNumbers, setPageNumbers] = useState(0)
    const urlLocation = useLocation()

    useEffect(() => {
        return () => {
            for (let i = 1; i <= Math.ceil(items.length / postsPerPage); i++) {
                setPageNumbers(i)
            }
        }
    }, [items.length, pageNumbers, postsPerPage])

    const changePage = (e, pageNumber) => setCurrentPage(pageNumber)

    return (
        <Stack alignItems="center" spacing={7}>
            <Grid container px={{ xs: 0.5, sm: 5, xl: 8 }} spacing={{ xs: 3, sm: 6, lg: 12 }} justifyContent="center">
                {/*For each item in the list, display an ItemCard*/}
                {currentPosts.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={4}>
                        <ItemCard item={item} mutate={mutate} />
                    </Grid>
                ))}
            </Grid>

            {urlLocation.pathname !== '/' && (
                <Pagination count={pageNumbers} color="secondary" shape="rounded" onChange={changePage} />
            )}
        </Stack>
    )
}

export default ItemsList
