import React from 'react'
import { render, screen } from '@testing-library/react'
import api from './api'
import App from './App'

jest.mock('./api')

describe('Requisições para API', () => {
  it('Exibir lista de transações através da API', async () => {
    api.listaTransacoes.mockResolvedValue([
      {
        "valor": "10",
        "transacao": "saque",
        "data": "10/08/2020",
        "id": 1
      },
      {
        "transacao": "deposito",
        "valor": "20",
        "data": "26/09/2020",
        "id": 2
      }
    ])

    render(<App />)

    // findBy realiza busca de forma assíncrona:
    // - conteúdo que ainda vai aparecer no DOM

    // promise que vai aguardar o 'saque' procurado aparecer,
    // cujo só vai ocorrer ao carregar as transações.
    // obs: possui timeout de 1s
    // obs2: o expect não é obrigatório, só foi utilizado para incluir no teste
    expect(await screen.findByText('saque')).toBeInTheDocument

    expect(screen.getByTestId('transacoes').children.length).toBe(2)
  })
})
