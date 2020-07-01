import React, { useState } from "react";
import * as S from "./styled";
import { FaSearch } from "react-icons/fa";
import { specficPokemon } from '../../services/api'

export default function Header({pokemonSearchName}) {
  const [pokemonName, setPokemonName] = useState('');

  async function handlePesquisa(){
    if(pokemonName){
      const response = await specficPokemon(pokemonName).then(response => response)
      pokemonSearchName(response)
    }
  }
  return (
    <S.Header>
        <S.inputName value={pokemonName} onChange={e => setPokemonName(e.target.value)} placeholder="Pesquise pelo nome "></S.inputName>
        <S.buttonSearch type="button" onClick={handlePesquisa}><FaSearch/></S.buttonSearch>
    </S.Header>
  );
}
