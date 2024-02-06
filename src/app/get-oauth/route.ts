export const dynamic = "force-dynamic"; // defaults to auto

import axios from "axios";

const API = axios.create({
  baseURL: "https://api.instagram.com/",
  timeout: 15000,
  responseType: "json",
});

export async function POST(request: Request) {
  const body = request.body;

  const data = await API.post<{ access_token: string; user_id: number }>(
    `oauth/access_token/`,
    body,
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
