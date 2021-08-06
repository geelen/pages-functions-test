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
    
    

//       const res = await env.ASSETS.fetch(request)
//       const body = await res.text()

//       const headers = {}

//       for (const [k,v] of res.headers.entries()) {
//         headers[k] = v
//       }

      const response = {
        headers:  nil,
        body: nil
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
