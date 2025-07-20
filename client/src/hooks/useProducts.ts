import { useSuspenseQuery } from "@tanstack/react-query";
import type { Product } from "../model/model";

const BASE_URL = "http://localhost:3001";

async function fetchProducts(): Promise<Product[]> {
  console.log("Fetching");
  const res = await fetch(`${BASE_URL}/products`, {
    method: "GET",
  });

  if (!res.ok) throw new Error("Error while getting products from server.");
  return res.json();
}

export function useProducts() {
  return useSuspenseQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
}
