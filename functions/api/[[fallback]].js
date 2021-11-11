export const onRequestGet = ({ request }) => {
  return new Response(`Plinko caught fallback for ${request.url}`)
}
