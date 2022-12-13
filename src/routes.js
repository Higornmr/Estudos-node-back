import { Router } from "express"

const routes = new Router()

routes.get("/", (request, response) => {
  return response.json({ msg: "Hello World" })
})

export default routes
