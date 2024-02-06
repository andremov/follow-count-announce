import axios from "axios";

const API = axios.create({
  baseURL: "https://follow-count-announce.vercel.app/",
  timeout: 15000,
  responseType: "json",
});

export function findUser(
  code: string,
  instagramClientId: string,
  instagramClientSecret: string,
  instagramClientRedirectUri: string,
) {
  const formData = new FormData();
  formData.append("client_id", instagramClientId);
  formData.append("client_secret", instagramClientSecret);
  formData.append("grant_type", "authorization_code");
  formData.append("redirect_uri", instagramClientRedirectUri);
  formData.append("code", code);
  console.log("local!");

  return API.post(`get-oauth`, formData).then(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return
    (r): any => r.data,
  );
}

export default API;
