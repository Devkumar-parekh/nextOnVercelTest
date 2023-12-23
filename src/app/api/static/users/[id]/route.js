import { users } from "@/app/util/db";
import { NextResponse } from "next/server";

export function GET(req, content) {
  const data = users.filter((item) => item.id == content.params.id);
  console.log(content.params.id);
  return NextResponse.json({
    Data: data,
    Message: data?.length ? "Success" : "No data found",
    Status: data?.length ? true : false,
  });
}
