# Pages Functions Test

***Deployed with Pages with Functions***

## https://pages-functions-test.pages.dev

Uses `plinko` under the hood:

```js
// functions/todo/[id].js

export function onRequestGet({ params }) {
  return new Response(`Got todo with ${JSON.stringify(params)}`)
}
```

![image](https://user-images.githubusercontent.com/23264/137927164-27e7dba7-7edd-4a96-b350-9d0685a60722.png)
