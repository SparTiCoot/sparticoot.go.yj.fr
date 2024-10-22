import axios from "axios";
import Repos from "../models/Repos";

const BASE_URL = "https://api.github.com/users";


/**
 * Fetches the list of public repositories for a given GitHub user.
 *
 * This function makes an asynchronous request to the GitHub API to retrieve
 * a list of public repositories for the specified username. The function returns
 * an array of `Repos` objects, each representing a repository with its `id`, `name`, and `url`.
 * 
 * @async
 * @function fetchUserRepos
 * 
 * @param {string} username
 * 
 * @returns {Promise<Repos[]>} A promise that resolves to an array of `Repos` instances,
 * each containing the `id`, `name`, and `url` of a repository.
 * 
 * @throws {Error} Throws an error if the request to the GitHub API fails.
 */
const fetchUserRepos = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}/repos`);
    return response.data.map(
      (repo) =>
        new Repos(
          repo.id,
          repo.name,
          repo.html_url,
          repo.description,
          repo.language
        )
    );
  } catch (error) {
    console.error("Error fetching repos:", error);
    throw error;
  }
};

export default fetchUserRepos;