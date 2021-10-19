export const onRequestGet = async ({ request, next }) => {
  const assetResponse = await next()
  assetResponse.headers.set('X-WORKER', 'missed handling in plinko')
  
  return assetResponse
}
