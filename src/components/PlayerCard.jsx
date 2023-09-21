import Link from "next/link";

const PlayerCard = ({ player }) => {
  return (
    <Link className="bg-white rounded-lg border-gray-800 mb-3 p-4 hover:bg-gray-100 hover:cursor-pointer"
    href={`/players/${player.id}`}
    >
      <h1 className="text-lg font-bold">{player.name}</h1>
      <h3 className="text-slate-400">{player.club}</h3>
      <p>{player.height}</p>
    </Link>
  );
};
export default PlayerCard;
