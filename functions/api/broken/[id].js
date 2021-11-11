export function onRequestGet({ params }) {
  return new Response(`Trying to do this will break: ${params}`)
}
