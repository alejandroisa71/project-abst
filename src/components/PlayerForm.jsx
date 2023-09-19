"use client";
import { useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const PlayerForm = () => {
  const [player, setPlayer] = useState({
    name: "",
    club: "",
    height: 0,
  });

  const form = useRef(null);
  const router = useRouter();

  const handleChange = (e) => {
    setPlayer({
      ...player,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(player);

    const res = await axios.post("/api/players", player);
    console.log(res);
    form.current.reset();
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
          onChange={handleChange}
          className="shadow appearance-none border w-full py-2 px-3"
        />
      </label>
      <label className="flex flex-col text-gray-700 text-sm font-bold mb-2">
        Altura
        <input
          type="text"
          name="height"
          placeholder="00.00"
          onChange={handleChange}
          className="shadow appearance-none border w-full py-2 px-3"
        />
      </label>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Guardar Jugador
      </button>
    </form>
  );
};
export default PlayerForm;
