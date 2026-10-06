import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { leadFormSchema } from "@/lib/validations/lead";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const businessId = body.business_id as string | undefined;

    if (!businessId) {
      return NextResponse.json(
        { error: "Missing business_id" },
        { status: 400 },
      );
    }

    const parsed = leadFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Validation failed", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const admin = createAdminClient();

    const { data: business, error: businessError } = await admin
      .from("businesses")
      .select("id")
      .eq("id", businessId)
      .maybeSingle();

    if (businessError || !business) {
      return NextResponse.json(
        { error: "Invalid business" },
        { status: 400 },
      );
    }

    const { data: lead, error: insertError } = await admin
      .from("leads")
      .insert({
        business_id: businessId,
        name: parsed.data.name.trim(),
        phone: parsed.data.phone.trim(),
        email: parsed.data.email.trim().toLowerCase(),
        service: parsed.data.service,
        zip_code: parsed.data.zip_code.trim(),
        appointment_date: parsed.data.appointment_date || null,
        message: parsed.data.message?.trim() || null,
        status: "new",
      })
      .select("id")
      .single();

    if (insertError) {
      console.error("Lead insert error:", insertError);
      return NextResponse.json(
        { error: "Could not save lead. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, id: lead.id }, { status: 201 });
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 },
    );
  }
}
