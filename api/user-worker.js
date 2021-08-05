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
    
    const assets = env.ASSETS || env.ASSETS__DO_NOT_USE
    let response = null
    
    if (assets) {
      const res = await ().fetch(request)
      const body = await res.text()
      response = {
        headers: [...res.headers.entries()],
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
        'x-served-by': 'PAGES FUNCTIONS TESTER WOO'
      }
    })
  }
}
