import React from 'react'

export default function Pokemon({ pokemon }) {
  console.log('pokemon', pokemon)
  return (
    <div className="pokemon">
      <div className="pokemon__name">
        {pokemon.name}
      </div>
      <div className="pokemon__meta">
        <span>{pokemon.maxHP}</span>,
        <span>{pokemon.maxCP}</span>
      </div>
      <div className="pokemon__image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="pokemon__attacks">
        {
          pokemon.attacks.special.map(s => <p>{s.name}, {s.damage}</p>)
        }
      </div>
    </div>
  )
}