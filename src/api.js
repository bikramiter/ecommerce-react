const API_URL = "https://fakestoreapi.com";

export function getProducts() {
  return fetch(`${API_URL}/products`).then((res) => res.json());
}
