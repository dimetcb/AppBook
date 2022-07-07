import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import books from './Api'
import { BOOKLIST_ROUTE } from '../utils/constants'
import Categories from './Categories'
import Sort from './Sorting'

const Search = observer(() => {
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()
    const searchBook = (event) => {
        if (event.key === 'Enter') {
            books.startSearch(event, searchValue)
        }
    }

    return (
        <header className="header">
            <h1 className="h1" onClick={() => navigate(BOOKLIST_ROUTE)}>
                Search for books
            </h1>
            <div className="search">
                <input
                    className="search-form"
                    type="text"
                    placeholder=" Enter name"
                    value={searchValue}
                    onChange={(event) => {
                        setSearchValue(event.target.value)
                    }}
                    onKeyDown={(event) => searchBook(event)}
                />
            </div>
            <div className="categories">
                <div className="categories-filter mt-3">
                    <p className="text mx-1 mt-1">Categories</p>
                    <Categories />
                </div>
                <div className="sort mt-3">
                    <p className="text mx-1 mt-1">Sorting by</p>
                    <Sort />
                </div>
            </div>
        </header>
    )
})

export default Search
