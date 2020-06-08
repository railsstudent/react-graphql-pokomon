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
      </div>
      <div className="pokemon__image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>


      <div className="pokemon__attacks__title">
        <p>Special Attacks:</p>
      </div>
      <div className="pokemon__attacks">
        { 
          pokemon.attacks.special.slice(0, 3).map(attack => 
          <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>)
        }
      </div>

      <div className="pokemon__fast__title">
        <p>Fast Attacks:</p>
      </div>
      <div className="pokemon__fast">
        { 
          pokemon.attacks.fast.slice(0, 2).map(fast => 
            <span key={`${fast.name}-${fast.damage}`}>{fast.name}</span>
          )
        }
      </div>

      <PokemonAttacks pokemon={pokemon} />
    </div>
  )
}
