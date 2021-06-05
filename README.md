# ead_js_alura_react-tests

> Projeto referente a [este](https://cursos.alura.com.br/course/react-automatizando-testes) curso.

- Setup `yarn`
- Run `yarn backend` and `yarn start`
- Test `yarn test`

## Explicações do curso

### Pirâmide de testes

```txt
  /\   - Mais difíceis de criar, lentos mas com grande valor agregado
 /  \
/    \ - Mais fáceis de criar com uma quantidade maior
```

```txt
  /\   - Mais caixa preta
 /  \
/    \ - Mais caixa branca
```

```txt
  /\   - e2e
 /  \  - Integração
/    \ - Unidade
```

```txt
  /\   - funcionalidades inteiras
 /  \  - integração entre componentes, mocks
/    \ - funções, componentes, snapshots
```

### Código descartável

1. Testes consomem esforço para criar e manter
2. É impossível testar **tudo** e perigoso não testar **nada**
3. Vale pensar **no que** testar, para investir tempo no ponto mais interessante da aplicação. Utilize o princípio de Pareto para este caso:
    - **Utilize** os 20% de esforços que retornam 80% dos resultados
    - **Evite** os 80% de esforços que retornam 20% dos resultados
