import connectDB from "@/config/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectDB();

    // Get the search query and category from URL params
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    let filter = {};
    if (category) {
      filter.category = category; // Filter by category if provided
    }

    const products = await Product.find(filter, "name category"); // Fetch name & category only

    return NextResponse.json({ success: true, products });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
