"use client";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";

const PlayerForm = () => {
  const [player, setPlayer] = useState({
    name: "",
    club: "",
    height: 0,
  });

  const form = useRef(null);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      axios.get(`/api/players/${params.id}`).then((res) => {
        setPlayer({
          name: res.data.name,
          club: res.data.club,
          height: res.data.height
        })
      });
    }
  }, []);

  const handleChange = (e) => {
    setPlayer({
      ...player,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!params.id){
      const res = await axios.post("/api/players", player);
    }
    else{
      const res = await axios.put(`/api/players/${params.id}`, player)
    }
    form.current.reset();
    router.refresh()
    router.push("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-md px-6 py-8 mb-4"
      ref={form}
    >
      <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
        Nombre
        <input
          autoFocus
          type="text"
          placeholder="Nombre"
          name="name"
          value={player.name}
          onChange={handleChange}
          className="shadow appearance-none border w-full py-2 px-3"
        />
      </label>
      <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
        Club
        <input
          type="text"
          placeholder="Club"
          name="club"
          value={player.club}
          onChange={handleChange}
          className="shadow appearance-none border w-full py-2 px-3"
        />
      </label>
      <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
        Altura
        <input
          type="text"
          name="height"
          value={player.height}
          placeholder="00.00"
          onChange={handleChange}
          className="shadow appearance-none border w-full py-2 px-3"
        />
      </label>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {params.id ? 'Actualizar Jugador' : 'Guardar Jugador'}
      </button>
    </form>
  );
};
export default PlayerForm;
