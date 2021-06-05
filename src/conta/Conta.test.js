import React from 'react'
import { render, screen as screenAlura } from '@testing-library/react'
import Conta from './Conta'
import { screen } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

describe('Componente de conta', () => {
  it('Exibir o saldo da conta como valor monetário', () => {
    render(<Conta saldo={1000} />)

    const saldo = screen.getByTestId('saldo-conta')
    expect(saldo.textContent).toBe('R$ 1000')
  })

  it('Chama a função de realizar a transação, quando o botão é clicado', () => {
    const funcaoRealizarTransacao = jest.fn()

    render(<Conta
      saldo={1000}
      realizarTransacao={funcaoRealizarTransacao}
    />)

    userEvent.click(screen.getByText('Realizar operação'))
    expect(funcaoRealizarTransacao).toHaveBeenCalled()
  })
})
