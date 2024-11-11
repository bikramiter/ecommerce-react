const API_URL = "https://fakestoreapi.com";

export function getProducts() {
  return fetch(`${API_URL}/products`).then((res) => res.json());
}

export function getProduct(id) {
  return fetch(`${API_URL}/products/${id}`).then((res) => res.json());
}
