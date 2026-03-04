import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function GET() {
  const session = await auth();

  if (!session?.accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const upstream = await fetch(`${process.env.INTERNAL_API_BASE_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!upstream.ok) {
    return NextResponse.json(
      {
        error: "UpstreamError",
        status: upstream.status,
      },
      { status: upstream.status },
    );
  }

  const data = (await upstream.json()) as unknown;
  return NextResponse.json({ data }, { status: 200 });
}
