import React from 'react'
import PokemonAttacks from './Pokemon-Attacks'

export default function Pokemon({ pokemon }) {
  const { name, classification, maxHP, maxCP, fleeRate, image } = pokemon
  const { special, fast } = pokemon.attacks

  return (
    <div className="pokemon">
      <div className="pokemon__name">
        {name} ({classification})
      </div>
      <div className="pokemon__meta">
        <span>{maxHP}</span>
        <span>{maxCP}</span>
         <span>{fleeRate}</span>
      </div>
      <div className="pokemon__image">
        <img src={image} alt={name} />
      </div>

      <PokemonAttacks title="Special Attacks:" items={special.slice(0, 3)} 
        titleClassname="pokemon__attacks__title" itemsClassname="pokemon__attacks" />

      <PokemonAttacks title="Fast Attacks:" items={fast.slice(0, 2)} 
        titleClassname="pokemon__fast__title" itemsClassname="pokemon__fast" />
    </div>
  )
}
