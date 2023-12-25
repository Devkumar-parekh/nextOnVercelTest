import { users } from "@/app/util/db";
import { NextResponse } from "next/server";

export function GET(req, res) {
  // const data = users;
  // return NextResponse.json(users);
  return NextResponse.json({
    Data: users,
    Message: users?.length ? "Success" : "No data found",
    Status: users?.length ? true : false,
  });
}
