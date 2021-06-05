import React from 'react'
import {
  render,
  screen as screenAlura,
  fireEvent as fireEventAlura
} from '@testing-library/react'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

import App, { calcularNovoSaldo } from './App'

describe('Componente principal', () => {
  describe('Quando eu abro o app do banco', () => {
    it('o nome é exibido', () => {
      render(<App />)

      expect(screen.getByText('ByteBank')).toBeInTheDocument()
    })

    it('o saldo é exibido', () => {
      render(<App />)

      expect(screen.getByText('Saldo:')).toBeInTheDocument()
    })

    it('o botão de realizar a transação é exibido', () => {
      render(<App />)

      expect(screen.getByText('Realizar operação')).toBeInTheDocument()
    })
  })

  describe('Quando eu realizo uma transação', () => {
    it('que é um saque, o valor vai diminuir', () => {
      const valores = {
        transacao: 'saque',
        valor: 50
      }
      const novoSaldo = calcularNovoSaldo(valores, 150)

      expect(novoSaldo).toBe(100)
    })

    it('que é um saque a transaçao deve ser realizada', () => {
      render(<App />)

      const saldo = screen.getByText('R$ 1000')
      const transacao = screen.getByLabelText('Saque')
      const valor = screen.getByTestId('valor')
      const botaoTransacao = screen.getByText('Realizar operação')

      expect(saldo.textContent).toBe('R$ 1000')

      // fireEventAlura.click(transacao, { target: { value: 'saque' }})
      // fireEventAlura.change(valor, { target: { value: 10 }})
      // fireEventAlura.click(botaoTransacao)
      userEvent.click(transacao)
      userEvent.type(valor, '10')
      userEvent.click(botaoTransacao)

      expect(saldo.textContent).toBe('R$ 990')
    })
  })
})

