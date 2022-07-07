import { makeAutoObservable, autorun } from 'mobx'
import axios from 'axios'

class Books {
    books = []
    nextBooks = []
    sortTypes = [
        { id: 1, type: 'relevance' },
        { id: 2, type: 'newest' }
    ]

    filterValue = ''
    categories = [
        { id: 1, type: 'all' },
        { id: 2, type: 'art' },
        { id: 3, type: 'biography' },
        { id: 4, type: 'computers' },
        { id: 5, type: 'history' },
        { id: 6, type: 'medical' },
        { id: 7, type: 'poetry' }
    ]
    category = 'all'
    sortValue = 'relevance'
    foundResults = 0
    startIndex = 0
    maxResults = 30

    constructor() {
        makeAutoObservable(this)
        autorun(() => this.startSearch())
    }

    startSearch(searchValue) {
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${searchValue}subject:${this.category}&orderBy=${this.sortValue}&key=AIzaSyCtjBdGLZV9sZXVkT-Hmo3PE4xrjOMv8rY&startIndex=0&maxResults=${this.maxResults}`
            )
            .then((res) => {
                this.books = [...res.data.items]
                this.foundResults = res.data.totalItems
            })
            .catch((error) => console.log(error))
    }

    setSortValue(value) {
        this.sortValue = value
        this.startIndex = 0
        console.log(this.sortValue)
    }

    setCategory(value) {
        this.category = value
        this.startIndex = 0
    }

    loadMore(searchValue) {
        this.startIndex += 30
        axios
            .get(
                `https://www.googleapis.com/books/v1/volumes?q=${searchValue}subject:${this.category}&orderBy=${this.sortValue}&key=AIzaSyCtjBdGLZV9sZXVkT-Hmo3PE4xrjOMv8rY&startIndex=${this.startIndex}&maxResults=${this.maxResults}`
            )
            .then((res) => {
                this.nextBooks = [...res.data.items]
                this.foundResults = res.data.totalItems
                const copy = this.books
                copy.push(...this.nextBooks)
                this.books = [...copy]
            })
            .catch((error) => console.log(error))
    }
}

export default new Books()
