import axios from "axios";
import Buttons from "./Buttons";

async function loadPlayer(playerId) {
  const { data } = await axios.get(
    `http://localhost:3000/api/players/${playerId}`
  );
  return data;
}

const PlayerPage = async ({ params }) => {
  const { name, club, height, id} = await loadPlayer(params.id);

  return (
    <section className="flex justify-center items-center">
      <div className="bg-white p-6 text-slate-900">
      <p>Nombre: {name}</p>
      <p>Club: {club}</p>
      <p>Altura:{height}</p>
     <Buttons playerId= {id}/>
    </div>
    </section>
  );
};
export default PlayerPage;
