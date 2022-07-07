import React from 'react'
import books from './Api'

const LoadMore = () => {
    return (
      <div className="loadmore">
        <button className="loadmore_button" onClick={() => books.loadMore()}>
          load more
        </button>
      </div>
    );
}

export default LoadMore;
