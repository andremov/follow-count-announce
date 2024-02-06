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

export function POST(request: Request) {
  console.log(request.formData());
  console.log("server?");
  // eslint-disable-next-line @typescript-eslint/unbound-method
  return API.post(`oauth/access_token/`, request.formData).then(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return
    (r): any => r.data,
  );
}

export default API;
