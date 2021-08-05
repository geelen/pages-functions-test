export default {
  async fetch(request, env) {
    const { url, method } = request
    const headers = {}

    for (const [k,v] of request.headers.entries()) {
      headers[k] = v
    }

    const input = {
      headers, url, method, body: await request.text()
    }
    console.log(input)
    
    const res = await (env.ASSETS || env.ASSETS__DO_NOT_USE).fetch(request)
    const body = await res.text()
    
    const payload = {
      request: input,
      response: {
        headers: res.headers,
        body
      }
    }
    
    return new Response(JSON.stringify(payload), {
      headers: {
        'content-type': 'application/json',
        'x-served-by': 'PAGES FUNCTIONS TESTER WOO'
      }
    })
  }
}
