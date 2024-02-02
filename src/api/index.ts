import axios from "axios";

const API = axios.create({
  baseURL: "https://api.instagram.com/",
  timeout: 15000,
  responseType: "json",
});

export function findUser(code: string) {
  return API.get(`oauth/access_token/`, {
    params: {
      client_id: process.env.instagramClientId,
      client_secret: process.env.instagramClientSecret,
      grant_type: "authorization_code",
      redirect_uri: "https://follow-count-announce.vercel.app/",
      code: code,
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return
  }).then((r): any => r.data);
}

export default API;
