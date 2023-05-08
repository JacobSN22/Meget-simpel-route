import React from 'react'
import { NavLink, Outlet, useOutlet, useParams } from 'react-router-dom'

export const Categorie = () => {

  return <>
  
   <Categorieinfo />
   <Outlet />
   </>
}

const Categorieinfo = () => {
    return(
    <>
        <h1>Categorie</h1>
        <NavLink to="/products/10/hej">Details</NavLink><br />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum cum quaerat, perferendis unde et illo quas quasi nam laudantium. Voluptatibus inventore tempora sint nostrum, ab, temporibus velit perferendis assumenda praesentium at consequuntur incidunt ea itaque obcaecati vel dolorum accusantium autem!</p>
    </>
    )
}