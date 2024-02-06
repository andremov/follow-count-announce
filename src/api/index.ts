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
  return API.post<{ access_token: string; user_id: number }>(`get-oauth`, {
    user_id: instagramClientId,
    client_secret: instagramClientSecret,
    grant_type: "authorization_code",
    redirect_uri: instagramClientRedirectUri,
    code: code,
  }).then((r) => r.data);
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
