export const dynamic = "force-dynamic"; // defaults to auto

import axios from "axios";

const API = axios.create({
  baseURL: "https://graph.instagram.com/",
  timeout: 15000,
  responseType: "json",
});

export async function POST(request: Request) {
  const formData = await request.formData();

  const user_id = formData.get("user_id") as string;
  const access_token = formData.get("access_token") as string;

  const data = await API.post<{ access_token: string; user_id: number }>(
    `${user_id}?fields=id,username&access_token=${access_token}`,
  ).then((r) => r.data);

  return Response.json(data);
}
