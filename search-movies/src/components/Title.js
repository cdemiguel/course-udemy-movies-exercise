import React from 'react'

// desestructuración en children
// exportamos funcion como constante... diferentes formas de exportar
export const Title = ({children}) => (
    <h1 className='title'>{children}</h1>
)

// esto en el padre:

// ejemplo pasar datos por prop
// <Title title='Search Movies' />

// ejemplo pasar dato por children
// <Title> Search Mocies </Title>