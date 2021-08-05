/**
 * Many more examples available at:
 *   https://developers.cloudflare.com/workers/examples
 * @param {Request} request
 * @returns {Promise<Response>}
 */
export default {
  async fetch(request) {
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
        'x-served-by': 'PAGES FUNCTIONS TESTER WOO',
        'x-this-is': 'some seriously dank hax'
      }
    })
  }
}
