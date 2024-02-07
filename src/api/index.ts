import axios from "axios";

const API = axios.create({
  baseURL: "https://follow-count-announce.vercel.app/",
  timeout: 15000,
  responseType: "json",
});

export function getUserAccessToken(
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

  return API.post<{ access_token: string; user_id: number }>(
    `get-oauth`,
    formData,
  ).then((r) => r.data);
}

export function getUserNode(user_id: number, access_token: string) {
  const formData = new FormData();
  formData.append("user_id", `${user_id}`);
  formData.append("access_token", access_token);

  return API.post<{ access_token: string; user_id: number }>(
    `get-user-node`,
    formData,
  ).then((r) => r.data);
}

export default API;
