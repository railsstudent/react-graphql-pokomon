import React from 'react'
import PokemonAttacks from './Pokemon-Attacks'

export default function Pokemon({ pokemon }) {
  console.log('pokemon', pokemon)

  return (
    <div className="pokemon">
      <div className="pokemon__name">
        {pokemon.name} ({pokemon.classification})
      </div>
      <div className="pokemon__meta">
        <span>{pokemon.maxHP}</span>
        <span>{pokemon.maxCP}</span>
         <span>{pokemon.fleeRate}</span>
      </div>
      <div className="pokemon__image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>

      <PokemonAttacks title="Special Attacks:" items={pokemon.attacks.special.slice(0, 3)} 
        titleClassname="pokemon__attacks__title" itemsClassname="pokemon__attacks" />

      <PokemonAttacks title="Fast Attacks:" items={pokemon.attacks.fast.slice(0, 2)} 
        titleClassname="pokemon__fast__title" itemsClassname="pokemon__fast" />
    </div>
  )
}
