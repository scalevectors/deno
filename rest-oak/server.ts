import { Application } from 'https://deno.land/x/oak/mod.ts'
import { router } from "./routes.ts"

const env = Deno.env.toObject()
const PORT = env.PORT || 3000

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Listening on port ${PORT}...`)

await app.listen(`127.0.0.1:${PORT}`)