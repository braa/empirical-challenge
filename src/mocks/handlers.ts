import { rest } from 'msw'
import { page1, page2 } from './data/cryptocurrencies'
import user from './data/user'

export const handlers = [
  rest.get('https://randomuser.me/api/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(user),
    )
  }),
  rest.get('/v1/cryptocurrency/listings/latest', (req, res, ctx) => {
      const isFirstPage = req.url.search.includes('start=1&');
      const response = isFirstPage ? page1 : page2;
    return res(
      ctx.status(200),
      ctx.json(response),
    )
  }),
]