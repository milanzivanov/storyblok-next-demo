import { draftMode } from "next/headers";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

export const GET = async (request: NextResponse) => {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug") || "/";

  if (!slug) {
    return NextResponse.json({ message: "Slug is required" }, { status: 400 });
  }

  (await draftMode()).enable();
  redirect(`/${slug}?${searchParams.toString()}`);
};
