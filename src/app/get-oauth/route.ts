export const dynamic = "force-dynamic"; // defaults to auto

// export async function GET(request: Request) {

//   const res = await fetch('https://data.mongodb-api.com/...', {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//   })
//   const data = await res.json()

//   return Response.json({ data })
// }

import axios from "axios";

const API = axios.create({
  baseURL: "https://api.instagram.com/",
  timeout: 15000,
  responseType: "json",
});

export async function POST(request: Request) {
  const formData = await request.formData();
  console.log(formData);

  const data = await API.post<{ code: string }>(
    `oauth/access_token/`,
    formData,
  ).then((r) => r.data);

  return Response.json(data);
}
