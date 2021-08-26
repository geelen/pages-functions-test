const GLOBAL_COUNT = {
  DEPLOY_ID: 'A'
}

export default {
  async fetch(request, env) {
    const url = request.url

    const colo = request.cf.colo
    if (!GLOBAL_COUNT[colo]) {
      GLOBAL_COUNT[colo] = {}
    }

    const count = GLOBAL_COUNT[colo][url] || 0
    GLOBAL_COUNT[colo][url] = count + 1

    return new Response(JSON.stringify(GLOBAL_COUNT) + '\n', {
      headers: {
        'content-type': 'application/json',
      },
    })
  },
}
