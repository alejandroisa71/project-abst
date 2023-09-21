"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

const Buttons = ({ playerId }) => {
  const router = useRouter();

  return (
    <div className="flex gap-2 justify-end mt-2">
      <button
        className="text-white bg-red-700 hover:bg-red-500 py-2 px-3 rounded"
        onClick={async () => {
          if (confirm("Esta seguro de eliminar este jugador?")) {
            const res = await axios.delete(`/api/players/${playerId}`);
            console.log(res);
            if ((res.status = 204)) {
              router.push("/players");
              router.refresh();
            }
          }
        }}
      >
        Borrar
      </button>
      <button
        className="text-white bg-gray-700 hover:bg-gray-500 py-2 px-3 rounded"
        onClick={() => router.push(`/players/edit/${playerId}`)}
      >
        Editar
      </button>
    </div>
  );
};
export default Buttons;
