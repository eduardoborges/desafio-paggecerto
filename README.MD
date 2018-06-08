# Desafio Paggcerto

Para resolver o problema tentei ao maxaimo reaproveitar componentes e utilizar funções para renderização dos formulários. Justamente com um sistema de steps baseados em rotas. 

O estado da aplicação está em arquitetura de [containers](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) e formulários com funções puras recebendo o estado do formulários pelas suas propriedades.

O ambiente foi feito com [Parcel Bundler](https://github.com/parcel-bundler/parcel) um bundler zero-config porque nao tinha muito tempo pra configurar o WebPack. Adicionei os presets no Babel para transpilar pra ES6 e reconhecer as paradinhas do React.

## Estrutura de Pastas

```plain
.
└── src
    ├── assets
    │   ├── files
    │   ├── fonts
    │   ├── images
    │   └── styles
    ├── components
    └── screens
        ├── Form
        └── Start

10 directories
```

## NPM Tasks

``` sh
$ yarn start // para iniciar projeto em dev
$ yarn build // para compilar para produção
```

## Bibliotecas utilizadas

Esta aplicação utiliza algumas bibliotecas:


* [React e React-DOM](https://facebook.github.io/react/) - Utilizamos para construir a interface do app.
* [react-router](https://github.com/ReactTraining/react-router) - Auxiliou na construcao das rotas da interface.
* [underscore](https://github.com/jashkenas/underscore) - Uma biblioteca geral de utilidades
* [Bulma](http://bulma.io) - Um framework pra fazer uma interface bonitinha.
