import Fastify from "fastify";

const app = Fastify()

/** 
 * Métodos HTTP: Get (criação), Post (criar), Put (atualizar), 
 *    Patch (atuialização especifica), Delete (deletar)
*/

app.get('/', () => {
  return 'Hello World'
})

app.listen({port:3333}).then(()=>{
  console.log('HTTP Server Running!')
})