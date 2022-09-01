import Head from 'next/head';
import { api } from '../../services/api';

const Pokemon = ({pokemon}) => {
  return (
    <>
    <Head>
      <title>Pokemon | Pikachu</title>
    </Head>
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.sprites.front_default} alt="" />
    </>
  )
}

export default Pokemon;

export const getStaticPaths = async () => {
  const response = await api.get('/pokemon', {
    params: {
      offset: 0, 
      limit: 5
    }
  });

  const paths = response.data.results.map(pokemon => ({
    params: {
      name: pokemon.name
    },
  }))

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async ({params}) => {
  const response = await api.get(`pokemon/${params.name}`);

  return {
    props: {
      pokemon: response.data
    }
  }
}
