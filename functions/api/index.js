export const onRequestGet = ({ request, env }) => {
  return new Response(JSON.stringify({request, env}))
}
