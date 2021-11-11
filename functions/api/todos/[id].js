export function onRequestGet({ params }) {
  return new Response(`Got todo with ${JSON.stringify(params)}`)
}
