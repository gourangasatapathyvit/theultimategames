import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ead6652212f4438883db67eb55b731c2",
  },
});
