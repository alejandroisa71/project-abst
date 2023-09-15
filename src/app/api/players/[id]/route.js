import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export const GET = async (_request, { params }) => {
  try {
    const result = await conn.query("SELECT * FROM player WHERE id = ?", [
      params.id,
    ]);
    console.log(result);

    if (result.length === 0) {
      return NextResponse.json(
        {
          message: "Jugador no encontrado",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(result[0]);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
};

export const PUT = async (request, { params }) => {
  try {
    const data = await request.json();
    const result = await conn.query("UPDATE player SET ? WHERE id = ?", [
      data,
      params.id,
    ]);

    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          message: "Jugador no Encontrado",
        },
        {
          status: 404,
        }
      );
    }

    const updatedPlayer = await conn.query(
      "SELECT * FROM player WHERE id = ?",
      [params.id]
    );

    return NextResponse.json(updatedPlayer[0]);
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
};

export const DELETE = async (_request, { params }) => {
  // console.log(params.id);
  try {
    const result = await conn.query("DELETE FROM player WHERE id = ?", [
      params.id,
    ]);

    if (result.affectedRows === 0) {
      return NextResponse.json(
        {
          message: "Producto no encontrado",
        },
        {
          status: 404,
        }
      );
    }
    return new Response(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
};
