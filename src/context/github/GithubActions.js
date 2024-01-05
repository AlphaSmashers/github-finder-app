import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});

// Get Search Results
export const searchUsers = async (text) => {
  // setLoading();
  const params = new URLSearchParams({
    q: text,
  });
  const response = await github.get(`/search/users?${params}`);
  return response.data.items; //in other cases we only need data from response.data, but here, we only need the items from the data, so be passed just that.
};

// Get user and repo
export const getUserAndRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  const [user, repos] = await Promise.all([github.get(`/users/${login}`), github.get(`/users/${login}/repos?${params}`)]);

  return { user: user.data, repos: repos.data };
};
