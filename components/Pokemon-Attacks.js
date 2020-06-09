import React from 'react'

export default function PokemonAttacks({ title, items, titleClassname, itemsClassname }) {
  return (
    <>
      <div className={titleClassname}>
        <p>{ title }</p>
      </div>
      <div className={itemsClassname}>
        { 
          items.map(fast => <span key={`${fast.name}-${fast.damage}`}>{fast.name}</span>)
        }
      </div>
    </>
  )
}
