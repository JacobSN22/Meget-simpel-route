
import React from 'react'
import { NavLink, Outlet, useOutlet, useParams } from 'react-router-dom'


export const Products = () => {
    const params = useParams()
    console.log(params);
    const outlet = useOutlet()
    return outlet || <Productinfo />
}

const Productinfo = () => {
    return(
        <>
            <h1>Product</h1>
            <NavLink to="/products/10">Categories</NavLink>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi tenetur ullam beatae labore, est illum facilis aperiam dolore similique fuga perspiciatis saepe in corrupti optio unde. Laboriosam quam quo possimus quidem. Eius animi unde autem omnis sunt non reprehenderit a adipisci necessitatibus laborum, tempore est exercitationem rerum numquam magni ut incidunt sequi illum, rem optio.</p>
        </>
    )
}