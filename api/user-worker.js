/**
 * Many more examples available at:
 *   https://developers.cloudflare.com/workers/examples
 * @param {Request} request
 * @returns {Promise<Response>}
 */
export default {
  async fetch(request, env) {
    const { url, method } = request
    const headers = {}

    for (const [k,v] of request.headers.entries()) {
      headers[k] = v
    }

    const payload = {
      message: "I'M ON A BRANCH MF DON'T YOU EVER FORGET",
      headers, url, method, body: await request.text(),
      bindings: Object.keys(env)
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
