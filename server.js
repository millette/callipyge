'use strict';

// npm
const Hapi = require('hapi');
const Vision = require('vision')
const LodashVision = require('lodash-vision')

const server = new Hapi.Server()
server.connection({ port: 3333, host: 'localhost' })

server.register(Vision, (err) => {
  server.views({
    engines: { html: LodashVision },
    path: 'templates',
    partialsPath: 'templates/partials',
    helpersPath: 'templates/helpers',
    isCached: false
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.view('allo', { str: 'Hello, world!' })
    }
  })
})

server.start((err) => {
  if (err) { throw err }
  console.log(`Server running at: ${server.info.uri}`)
})
