import React from 'react';
import { useQuery } from '@apollo/react-hooks'
import Pokemon from '../components/Pokemon'

export default function PokemonsContainer() {
  const { data: { pokemons = [] } = {} }  = useQuery(GET_POKEMON, {
    variables: { first: 9 },
  })

  return (
    <div className="container">
      { pokemons && pokemons.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />) }
    </div>
  )
}
