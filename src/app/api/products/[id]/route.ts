import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  // Example logic – adjust to your own data source
  const product = { id, name: "Sample Product", price: 100 };

  return NextResponse.json(product);
}
