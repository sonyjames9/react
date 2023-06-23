import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '4959c12797f54ba09b5987d9bb799218'
  }
})