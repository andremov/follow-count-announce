export const dynamic = "force-dynamic"; // defaults to auto

import axios from "axios";

const API = axios.create({
  baseURL: "https://api.instagram.com/",
  timeout: 15000,
  responseType: "json",
});

export async function POST(request: Request) {
  // const { user_id, client_secret, grant_type, redirect_uri, code } = request.body// as Record<string, string>;

  // const formData = new FormData();
  // formData.append("user_id", user_id);
  // formData.append("client_secret", client_secret);
  // formData.append("grant_type", grant_type);
  // formData.append("redirect_uri", redirect_uri);
  // formData.append("code", code);
  console.log({ body: request.body });

  const data = await API.post<{ access_token: string; user_id: number }>(
    `oauth/access_token/`,
    request.body,
  )
    .then((r) => {
      console.log({ data: r.data });

      return r.data;
    })
    .catch((e) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      console.log({ e });
    });

  return Response.json(data ?? {});
}
