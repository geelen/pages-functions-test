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
    
    const assets = env.ASSETS || env.ASSETS__DO_NOT_USE
    let response = null
    
    if (assets) {
      const res = await assets.fetch(request)
      const body = await res.text()

      const headers = {}

      for (const [k,v] of res.headers.entries()) {
        headers[k] = v
      }

      response = {
        headers,
        body
      }
    }
    
    const payload = {
      request: input,
      response
    }
    
    return new Response(JSON.stringify(payload), {
      headers: {
        'content-type': 'application/json',
        'x-served-by': 'NO MORE EXPERIMENTAL BUILDS FUNCTIONS TESTER WOO'
      }
    })
  }
}
