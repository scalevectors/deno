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

export const notImplemented = ({ response }: { response: any }) => {
    response.body = 'Currently not implemented...'
    response.status = 200
}

export const addContent = async ({
    request, response}: {
    request: any, response: any}) => {

    const body = await request.body()
    const { id, description, type }: { id: number, description: string, type: string } = body.value
    contents.push({
        id: id,
        description: description,
        type: type
    })

    response.body = { msg: 'OK' }
    response.status = 200
}

export const getContents = ({response}: {response: any}) => {
  response.body = contents
}

export const getContent = ({
    params, response}: 
    {params: {id: string}, response: any }) => {
    const content = contents.filter((content) => content.id === parseInt(params.id))

    if (content.length <= 0) {
      response.status = 400
      response.body = { msg: `Cann't find content ${params.id}` }
      return
    }
    
    response.status = 200
    response.body = content[0]
}


export const router = new Router()
router
  .get('/', getHome)
  .get('/contents', getContents)
  .get('/contents/:id', getContent)
  .post('/contents', addContent)
  .put('/todos/:id', notImplemented)
  .delete('/todos/:id', notImplemented)  
