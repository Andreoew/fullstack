import request from 'supertest';
import { Response } from 'express';
import app from './../src/app';

describe('Testando rodas do accounts', () => {
  it('GET /accounts/ - Deve retornar statusCode 200', async () => {
    const resultado = await request(app)
      .get('/accounts/');
    
    expect(resultado.status).toEqual(200);
    expect(Array.isArray(resultado.body)).toBeTruthy();
  })

  it('POST /accounts/ - Deve retornar statusCode 201', async() => {
    const payload = {
      id: 1,
      name: 'Andre',
      email: 'andreoew2@gmail.com',
      password: '123456',
    }

    const resultado = await request(app)
      .post('/accounts/')
      .send(payload)
    
    expect(resultado.status).toEqual(201);
    expect(resultado.body.id).toBe(1);
  })

  it('POST /accounts/ - Deve retornar statusCode 422', async() => {
    const payload = {
      id: 1,
      street: 'Test rua',
      city: 'Test city',
      state: 'TS',
    }

    const resultado = await request(app)
      .post('/accounts/')
      .send(payload)
    
    expect(resultado.status).toEqual(422);
  })

  it('PATCH /accounts/:id - Deve retornar statusCode 200', async() => {
    const payload = {
      name: 'Andre',
      email: 'andreoew2@gmail.com',
      password: '123456',
    }

    const resultado = await request(app)
      .patch('/accounts/1')
      .send(payload)
    
    expect(resultado.status).toEqual(200);
    expect(resultado.body.id).toEqual(1);
  })

  it('PATCH /accounts/:id - Deve retornar statusCode 400', async() => {
    const payload = {
      name: 'Andre',
      email: 'andreoew2@gmail.com',
      password: '123456',
    }

    const resultado = await request(app)
      .patch('/accounts/abc')
      .send(payload)
    
    expect(resultado.status).toEqual(400);
  })

  it('PATCH /accounts/:id - Deve retornar statusCode 404', async() => {
    const payload = {
      name: 'Andre Silva',
      email: 'andreoew2@gmail.com',
      password: '123456',
    }

    const resultado = await request(app)
      .patch('/accounts/-1')
      .send(payload)
    
    expect(resultado.status).toEqual(404);
  })

  it('GET /accounts/:id - Deve retornar statusCode 200', async () => {
    const resultado = await request(app)
      .get('/accounts/1');
    
    expect(resultado.status).toEqual(200);
    expect(resultado.body.id).toBe(1);
  })

  it('GET /accounts/:id - Deve retornar statusCode 404', async () => {
    const resultado = await request(app)
      .get('/accounts/-1');
    
    expect(resultado.status).toEqual(404);
  })

  it('GET /accounts/:id - Deve retornar statusCode 400', async () => {
    const resultado = await request(app)
      .get('/accounts/abcd');
    
    expect(resultado.status).toEqual(400);
  })
})