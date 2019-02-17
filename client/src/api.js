export async function testGet() {
  const response = await fetch("/api/test");
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}

export async function testPost(args) {
  const response = await fetch("/api/testpost", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ post: args })
  });
  const body = await response.text();
  return body;
}
