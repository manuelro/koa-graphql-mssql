const Koa = require('koa')
const KoaRouter = require('koa-router')
const KoaBodyParser = require('koa-bodyparser')
const { ApolloServer } = require('apollo-server-koa')
const typeDefs = require('./schemas')
const resolvers = require('./resolvers')

// Koa-land starts here
// --------------------------

// Very Express-like, declare and assign a new Koa instance to create a server
const app = new Koa()

// Use KoaBodyParser for POSTs
app.use(KoaBodyParser())

// Router-land starts here
// --------------------------
const router = new KoaRouter()
app.use(router.routes())
app.use(router.allowedMethods())

// Hello World!
// router.get('/', async (ctx, next) => {
//   ctx.body = 'Hello World!'
//   await next()
// })

// ApolloServer-land starts here
// --------------------------

// Setup the GQL Server
const gqlServer = new ApolloServer({ typeDefs, resolvers })

// Add the GQL middleware to use our app
gqlServer.applyMiddleware({ app, cors: true })

// Log X: Sync Operation
// app.use(async (ctx, next) => {
//   console.log('X')
//   await next()
// })

// Log A
// app.use(async (ctx, next) => {
//   await next()
//   console.log('A')
// })

// Log B
// app.use(async (ctx, next) => {
//   await next()
//   console.log('B')
// })

// Logger middleware
// app.use(async (ctx, next) => {
//   await next()
//   const responseTime = ctx.response.get('X-Response-Time')
//   console.log(`${ctx.method} ${ctx.url} - ${responseTime}`, ctx)
//   console.log('the response status is ', ctx.status, ctx.body)
// })

// Response time
// app.use(async (ctx, next) => {
//   const start = Date.now()
//   await next()
//   const milliseconds = Date.now() - start
//   ctx.set('X-Response-Time', `${milliseconds}ms`)
// })

// Cookies
// app.use(async (ctx, next) => {
//   await next()
//   ctx.cookies.set('name', ctx.name)
// })

// Throwing 404s
// app.use(async (ctx, next) => {
//   await next()
//   ctx.assert(true, 400, 'Not found')
// })

// Events handling
// app.on('error', err => {
//   console.log(err)
// })

app.use(async (ctx, next) => {
  await next()
  if(ctx.status === 404)
    ctx.body = 'Page not found'
})

// Koa Context
app.context.name = 'Manu'

module.exports = app

app.listen(3000)