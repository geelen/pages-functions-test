export function onRequestGet({ params }) {
  return new Response(`Got todo with ${params}`)
}
