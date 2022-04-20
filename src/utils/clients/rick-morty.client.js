import axios from "axios";

const getCharacters = async (arrayNum) => {
  const { data } = await axios.get(
    `https://rickandmortyapi.com/api/character/[${arrayNum}]`
  );
  return data;
};

export default getCharacters;
