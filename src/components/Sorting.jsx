import { observer } from 'mobx-react-lite'
import React from 'react'
import { Dropdown } from 'react-bootstrap'
import books from './Api'

const Sort = observer(() => {
    return (
        <Dropdown className="dropdown">
            <Dropdown.Toggle className="toggle" variant="light">
                {books.sortValue}
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown_menu">
                {books.sortTypes.map((key) => (
                    <Dropdown.Item
                        key={key.id}
                        onClick={() => books.setSortValue(key.type)}
                    >
                        {key.type}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
})

export default Sort
