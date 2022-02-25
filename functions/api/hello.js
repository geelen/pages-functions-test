const hello = async ({ next }) => {
  const response = await next()
  response.headers.set('X-Hello', 'Hello from Pages Functions (on a branch)!')
  return response
}

export const onRequestGet = [
  hello,
  () => {
    return new Response('Hello, world from Plinko on Pages!!! Maybe I am super cool?')
  }
]
