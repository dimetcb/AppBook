import { observer } from 'mobx-react-lite'
import React from 'react'
import { Dropdown } from 'react-bootstrap'
import books from './Api'

const Categories = observer(() => {
    return (
        <Dropdown className="dropdown">
            <Dropdown.Toggle className="toggle" variant="light">
                {books.category}
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown_menu">
                {books.categories.map((key) => (
                    <Dropdown.Item
                        key={key.id}
                        onClick={() => books.setCategory(key.type)}
                    >
                        {key.type}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
})

export default Categories
