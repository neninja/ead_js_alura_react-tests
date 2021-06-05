import React from 'react'
import { render, screen } from '@testing-library/react'

import App from './App'

describe('Componente principal', () => {
  describe('Quando eu abro o app do banco', () => {
    it('O nome é exibido', () => {
      render(<App />)

      expect(screen.getByText('ByteBank')).toBeInTheDocument()
    })

    it('O saldo é exibido', () => {
      render(<App />)

      expect(screen.getByText('Saldo:')).toBeInTheDocument()
    })

    it('O botão de realizar a transação é exibido', () => {
      render(<App />)

      expect(screen.getByText('Realizar operação')).toBeInTheDocument()
    })
  })
})

