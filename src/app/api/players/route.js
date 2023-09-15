import { NextResponse } from "next/server";
import { conn } from "@/libs/mysql";

export const GET = async () => {
  try {
    const results = await conn.query("SELECT * FROM player");
    console.log(results);
    return NextResponse.json(results);
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

export const POST = async (request) => {
  try {
    const { name, club, height } = await request.json();

    const result = await conn.query("INSERT INTO player SET ?", {
      name,
      club,
      height,
    });

    return NextResponse.json({
      message: {
        name,
        club,
        height,
        id: result.insertId,
      },
    });
  } catch (error) {
    console.log(error);
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
