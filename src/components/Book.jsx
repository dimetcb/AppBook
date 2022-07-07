import { observer } from 'mobx-react-lite'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BOOKPAGE_ROUTE } from '../utils/constants'

const Book = observer(({ bookname, author, categories, img, id }) => {
    const navigate = useNavigate()
    return (
        <div
            className="book"
            onClick={() => navigate(BOOKPAGE_ROUTE + '/' + id)}
        >
            <div className="book_img">
                <img className="book_file" src={img} alt="no img" />
            </div>
            <div className="book_bottom">
                <div className="book_category">{categories}</div>
                <h1 className="bookname">{bookname.slice(0, 30)}</h1>
                <p className="book_author">{author}</p>
            </div>
        </div>
    )
})

export default Book
