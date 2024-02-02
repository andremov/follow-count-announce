import axios from "axios";

const API = axios.create({
  baseURL: "https://api.instagram.com/",
  timeout: 15000,
  responseType: "json",
});

export function findUser(
  code: string,
  instagramClientId: string,
  instagramClientSecret: string,
) {
  const formData = new FormData();
  formData.append("client_id", instagramClientId);
  formData.append("client_secret", instagramClientSecret);
  formData.append("grant_type", "authorization_code");
  formData.append("redirect_uri", "https://follow-count-announce.vercel.app/");
  formData.append("code", code);

  return API.post(`oauth/access_token/`, formData).then(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return
    (r): any => r.data,
  );
}

export default API;
