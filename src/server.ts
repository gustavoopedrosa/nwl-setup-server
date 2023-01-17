import Fastify from "fastify";
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors)

/** 
 * Métodos HTTP: Get (criação), Post (criar), Put (atualizar), 
 *    Patch (atuialização especifica), Delete (deletar)
*/

app.get('/', async () => {
  const habits = await prisma.habit.findMany()

  return habits
})

app.listen({port:3333}).then(()=>{
  console.log('HTTP Server Running!')
})