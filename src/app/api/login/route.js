import { users } from "@/app/util/db";
import { NextResponse } from "next/server";

export async function POST(req, content) {
//   const data = users.filter((item) => item.id == content.params.id);
const payload = await req.json()
  console.log(payload);
  return NextResponse.json({
    Data: payload,
    // Message: data?.length ? "Success" : "No data found",
    // Status: data?.length ? true : false,
  });
}
