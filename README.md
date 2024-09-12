<h1 align="center">
  in.Orbit
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/yagobmoreira/inorbit">
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/yagobmoreira/inorbit" />
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/yagobmoreira/inorbit">
</p>

## 💻 Sobre

Este é o repositório do **in.Orbit**, que é um sistema de planejamento de meta, onde é possível adicionar metas, com possibilidade de escolher a duração das metas. É possível confirmar as metas, e listar as metas já realizadas ordenadas por dia e hora.

Essa aplicação foi desenvolvida durante o evento **Next Level Week Pocket** da [Rocketseat](https://www.rocketseat.com.br/) utilizando principalmente tecnologias como `Node`, `TypeScript`, `Fastify`, `Drizzle`, `React`, `Tailwind` e `Docker`.

## ⚙ Instalação

### 📝 Requisitos

Antes de baixar o projeto é necessário ter as seguintes ferramentas já instaladas:

* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/pt/) ou [yarn](https://yarnpkg.com/)
* [Docker](https://www.docker.com/) (opcional)

Utilize uma ferramenta como [Insomnia](https://insomnia.rest/), ou outra similar, para testar as rotas da aplicação sem o frontend.

### Configuração

Passo a passo para clonar e executar a aplicação na sua máquina:

1. Clone o repositório (Utilizar Link SSH).

2. Acesse a pasta do projeto:
```bash
  cd inorbit
```
3. Instale as dependências do projeto:
```bash
  npm run install:apps
```
4. Crie um arquivo de variáveis de ambiente
```bash
  cd server && touch .env
```
>Nota: Você pode utilizar o arquivo [.env.example](./server/.env.example) como exemplo

5. Execute as migrations do banco:
```bash
  npm run db:migrate
```
>Nota: Caso não tenha um serviço PostgreSQL, veja a seção "Configuração com Docker"

6. Execute a seed do banco (OPCIONAL):
```bash
  npm run db:seed
```

7. Execute o Back-end da aplicação em modo desenvolvimento:
```bash
  npm run dev:backend
```
8. Execute o Front-end da aplicação em modo desenvolvimento:
```bash
  npm run dev:frontend
```
>Nota: Por padrão o Front-end estará rodando na porta 5173, o Back-end na porta 3333

#### Configuração com Docker
1. Clone o repositório (Utilizar Link SSH).

2. Acesse a pasta do projeto:
```bash
  cd inorbit
```
3. Executar os containers Docker
```sh
  npm run compose:up
```

## 🛠 Tecnologias

As seguintes libs foram usadas na construção do projeto:

### Backend
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Fastify](https://fastify.dev/)**
- **[Drizzle](https://orm.drizzle.team/)**
- **[Zod](https://zod.dev/)**
- **[DayJS](https://day.js.org/)**

### Frontend
- **[React](https://react.dev/)**
- **[ReactRouter](https://reactrouter.com/en/main)**
- **[TailwindCSS](https://tailwindcss.com/)**
- **[Tailwind-Variants](https://www.tailwind-variants.org/)**
- **[LucideReact](https://lucide.dev/guide/packages/lucide-react)**
- **[TanStack Query](https://tanstack.com/query/latest)**