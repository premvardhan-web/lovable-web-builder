import server from "./server.js";

export default async function handler(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);

  let body;
  if (req.method !== "GET" && req.method !== "HEAD") {
    const chunks = [];
    for await (const chunk of req) chunks.push(chunk);
    body = Buffer.concat(chunks);
  }

  const request = new Request(url.toString(), {
    method: req.method,
    headers: new Headers(
      Object.entries(req.headers).flatMap(([k, v]) =>
        Array.isArray(v) ? v.map((val) => [k, val]) : [[k, String(v)]]
      )
    ),
    body,
  });

  const response = await server.fetch(request, {}, { waitUntil: () => {} });

  res.statusCode = response.status;
  response.headers.forEach((value, key) => res.setHeader(key, value));

  const arrayBuffer = await response.arrayBuffer();
  res.end(Buffer.from(arrayBuffer));
}
