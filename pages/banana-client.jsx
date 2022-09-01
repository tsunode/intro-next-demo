import { useEffect, useState } from 'react';

import {api} from '../services/api';
import styles from '../styles/Home.module.css'

const Banana = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    api.get('pokemon').then((response) => {
      setPokemons(response.data.results);
    })
  }, []);

  return (
    <div className={styles.container}>
      <h1>Banana</h1>

      <ul>
        {
          pokemons.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Banana;