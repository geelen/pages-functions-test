const errorHandler = async ({ next }) => {
  try {
    return await next()
  } catch (err) {
    return new Response(`${err.message}\n${err.stack}`, { status: 500 })
  }
}

const hello = async ({ next }) => {
  const response = await next()
  response.headers.set('X-Middleware', 'New Pages Type!')
  return response
}

export const onRequest = [errorHandler, hello]
