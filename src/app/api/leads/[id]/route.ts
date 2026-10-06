import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { leadStatusSchema } from "@/lib/validations/lead";

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const status = (body as { status?: string }).status;
  const parsed = leadStatusSchema.safeParse(status);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("leads")
    .update({ status: parsed.data })
    .eq("id", id)
    .select("*")
    .maybeSingle();

  if (error) {
    console.error("Lead update error:", error);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }

  if (!data) {
    return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  }

  return NextResponse.json({ lead: data });
}
