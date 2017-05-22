import request from 'supertest-as-promised'
import express from '../../services/express'
import routes from '.'

const app = () => express(routes)

test('POST /attack 201', async () => {
  const { status, body } = await request(app())
    .post('/')
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
})
