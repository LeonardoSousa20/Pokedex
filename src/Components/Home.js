import React from 'react';
import axios from 'axios';
import Header from './Header';
import Pokemon from './Pokemon';
import { Link } from 'react-router-dom';

function Home() {
  const [list, setList] = React.useState([]);
  const [initialResponse, setInitialResponse] = React.useState('');
  const [url, setUrl] = React.useState(
    'https://pokeapi.co/api/v2/pokemon?offset=0&limit=50',
  );
  const [load, setLoad] = React.useState(true);
  const [offset, setOffset] = React.useState('');
  const [limit, setLimit] = React.useState('');

  React.useEffect(() => {
    axios.get(url).then((response) => {
      setInitialResponse(response.data);

      const sortedArr = [...response.data.results];
      sortedArr.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });

      const promises = sortedArr.map((item) => {
        return axios.get(item.url);
      });
      Promise.all(promises).then((value) => {
        setLoad(false);
        setList(value);
      });
    });
    const searchParams = new URLSearchParams(new URL(url).search);
    setOffset(searchParams.get('offset'));
    setLimit(searchParams.get('limit'));
  }, [url]);

  function handlePage({ target }) {
    if (target.id === 'next') {
      setUrl(initialResponse.next);
    } else {
      setUrl(initialResponse.previous);
    }
  }

  return (
    <div className="flex flex-col h-screen items-center">
      <main className="flex flex-col text-3xl justify-center items-center mt-20">
        <div className="pokemon-font text-center py-12">
          <h1>POKEDEX</h1>
        </div>
        <div className="flex flex-wrap gap-5  justify-start">
          {load && <div>Carregando...</div>}
          {list.map((details, index) => {
            return (
              <div>
                <Pokemon key={index} details={details.data} />
              </div>
            );
          })}
        </div>
        <div className="flex justify-center items-center gap-40 my-20">
          <button
            className={` ${
              initialResponse.previous
                ? 'bg-gradient-to-b from-red-700 via-red-600 to-red-500 border-red-700'
                : 'bg-gray-400 border-gray-600'
            } text-white font-bold text-sm py-2 px-4 border  rounded`}
            onClick={handlePage}
            id="previous"
          >
            Pagina Anterior
          </button>
          <button
            className="bg-gradient-to-b from-red-700 via-red-600 to-red-500 text-white font-bold text-sm py-2 px-4 border border-red-700 rounded"
            onClick={handlePage}
            id="next"
          >
            Proxima Pagina
          </button>
        </div>
      </main>
    </div>
  );
}
export default Home;
