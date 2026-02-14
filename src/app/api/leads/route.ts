import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  city?: string;
  estimatedValue?: string;
};

export async function POST(request: Request) {
  const data = (await request.json()) as LeadPayload;

  const requiredFields: (keyof LeadPayload)[] = [
    "name",
    "email",
    "phone",
    "city",
    "estimatedValue"
  ];

  const missingField = requiredFields.find((field) => !data[field]);

  if (missingField) {
    return NextResponse.json(
      { success: false, error: `Missing required field: ${missingField}` },
      { status: 400 }
    );
  }

  // TODO: persist in database / CRM integration.
  console.log("[lead_received]", {
    ...data,
    receivedAt: new Date().toISOString()
  });

  return NextResponse.json({ success: true }, { status: 201 });
}
