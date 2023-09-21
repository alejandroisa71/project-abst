import axios from "axios";
import PlayerCard from "../../components/PlayerCard";

const loadProducts = async () => {
  const { data } = await axios.get("http://localhost:3000/api/players");
  return data;
};

const PlayerPage = async () => {
  const players = await loadProducts();
  // console.log(players);
  return (
    <div className="grid gap-4 grid-cols-4 text-slate-600">
      {players.map((player) => (
        <PlayerCard player={player} key={player.id} />
      ))}
    </div>
  );
};
export default PlayerPage;
