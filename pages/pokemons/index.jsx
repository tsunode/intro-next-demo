import Link from 'next/link';

import {api} from '../../services/api';
import styles from '../../styles/Home.module.css'

const Banana = ({pokemons}) => {
  return (
    <div className={styles.container}>
      <h1>Banana</h1>

      <ul>
        {
          pokemons.map((pokemon) => (
            <li key={pokemon.name}>
              <Link href={`/pokemons/${pokemon.name}`}>
                {pokemon.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Banana;

export const getServerSideProps = async () => {
  const response = await api.get('pokemon');

  return {
    props: {
      pokemons: response.data.results
    }
  }
}