import axios from "axios";

export async function getCategoryJoke() {
  try {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    const category = urlParams.get("category");
    console.log(category);
    const endpoint = `https://api.chucknorris.io/jokes/random?category=${category}`;
    const response = await axios.get(endpoint);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}
