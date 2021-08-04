addEventListener("fetch", (event) => {
  event.respondWith(
    handleRequest(event.request).catch(
      (err) => new Response(err.stack, { status: 500 })
    )
  );
});

/**
 * Many more examples available at:
 *   https://developers.cloudflare.com/workers/examples
 * @param {Request} request
 * @returns {Promise<Response>}
 */
async function handleRequest(request) {
  const { url, method } = request
  const headers = {}

  for (const [k,v] of request.headers.entries()) {
    headers[k] = v
  }

  const payload = {
    headers, url, method, body: await request.text()
  }
  console.log(payload)
  return new Response(JSON.stringify(payload), {
    headers: {
      'content-type': 'application/json',
      'x-served-by': 'PAGES FUNCTIONS TESTER WOO'
    }
  })
}
