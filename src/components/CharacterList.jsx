import { useEffect, useState } from "react"
import CharacterCard from "./CharacterCard";
import NavPage from "./NavPage";

function CharacterList() {

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [pages, setPages] = useState(0)

    useEffect(() => {
      async function fetchData() {
        const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
        );
        const data = await response.json();
        setPages(data.info.pages)
        setCharacters(data.results);
        setLoading(false);
      }
      fetchData();
    }, [page]);

    return (
      <div className="container">
        <NavPage page={page} setPage={setPage} pages={pages} />

        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="row">
            {characters.map((character) => {
              return (
                <div className="col-md-4" key={character.id}>
                  <CharacterCard character={character} />
                </div>
              );
            })}
          </div>
        )}

        <NavPage page={page} setPage={setPage} />
      </div>
    );
}

export default CharacterList