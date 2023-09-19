import axios from "axios";

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
        <div
          key={player.id}
          className="bg-white rounded-lg border-gray-800 mb-3 p-4"
        >
          <h1 className="text-lg font-bold">{player.name}</h1>
          <h3 className="text-slate-400">{player.club}</h3>
          <p>{player.height}</p>
        </div>
      ))}
    </div>
  );
};
export default PlayerPage;
