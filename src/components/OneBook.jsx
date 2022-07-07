import { observer } from 'mobx-react-lite'
import React from 'react'
import Book from './Book'
import book from './Api'

const OneBook = observer(() => {
    return (
        <div className="oneBook">
            {book.books.map((book) => {
                if (book.volumeInfo.categories !== undefined) {
                    return (
                        <Book
                            key={book.id}
                            bookname={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            categories={book.volumeInfo.categories}
                            img={book.volumeInfo.imageLinks.thumbnail}
                            id={book.id}
                        />
                    )
                } else
                    return (
                        <Book
                            key={book.id}
                            bookname={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            categories={'No category'}
                            img={book.volumeInfo.imageLinks.thumbnail}
                        />
                    )
            })}
        </div>
    )
})

export default OneBook
