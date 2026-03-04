import { NextResponse } from "next/server";
import { auth } from "@/auth";

export async function GET() {
  const session = await auth();

  if (!session?.accessToken) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const roles = session.user.roles ?? [];
  if (!roles.includes("admin")) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const upstream = await fetch(`${process.env.INTERNAL_API_BASE_URL}/admin/report`, {
    headers: {
      Authorization: `Bearer ${session.accessToken}`,
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!upstream.ok) {
    return NextResponse.json(
      {
        error: "ReportUnavailable",
        status: upstream.status,
      },
      { status: upstream.status },
    );
  }

  const data = (await upstream.json()) as unknown;
  return NextResponse.json({ data }, { status: 200 });
}
