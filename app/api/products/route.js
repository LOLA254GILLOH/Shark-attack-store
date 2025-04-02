import connectDB from "@/config/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");
    const category = searchParams.get("category");

    let filter = {};

    // Filter by category if provided
    if (category) {
      filter.category = category;
    }

    // Search by product name if query is provided
    if (query) {
      filter.name = { $regex: query, $options: "i" }; // Case-insensitive search
    }

    const products = await Product.find(filter);

    return NextResponse.json({ success: true, products });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message });
  }
}
