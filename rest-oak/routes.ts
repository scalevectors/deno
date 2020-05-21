import { Router } from 'https://deno.land/x/oak/mod.ts'

interface Content {
  id: number
  description: string
  type: string
}

let contents: Array<Content> = [
  {
    id: 1,
    description: "cartoon",
    type: "vod"
  },
  {
    id: 2,
    description: "Football",
    type: "live"
  },
  {
    id: 3,
    description: "Ertugal",
    type: "vod"
  }
]

export const getHome = ({ response }: { response: any }) => {
    response.body = 'Deno API server is running...'
    response.status = 200
}

export const getContents = ({response}: {response: any}) => {
  response.body = contents
}


export const router = new Router()

router
  .get('/', getHome)
  .get('/contents', getContents)
  