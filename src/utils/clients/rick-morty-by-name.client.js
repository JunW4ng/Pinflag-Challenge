import axios from "axios";

const getCharaterByName = async (name) => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/?name=${name}`
  );
  return data.results;
};

export default getCharaterByName;
