import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import OneBook from '../components/OneBook'
import LoadMore from '../components/LoadMore'
import Results from '../components/Results'
import Loader from '../components/Loader'
import books from '../components/Api'

const MainPage = observer(() => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        books.startSearch()
        setLoading(false)
    }, [])

    return (
      <div>
        <Results count={books.foundResults} />
        {loading ? <Loader /> : <OneBook />}
        <LoadMore />
      </div>
    );
})

export default MainPage
