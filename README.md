# Rails application skeleton

I got sick of doing all these steps every time I started a new project.

```
curl -L https://raw.githubusercontent.com/fauxparse/skeleton/main/install.sh | zsh
```

## Back end

* Rails 6.1.3
* Ruby 2.7.3
* Postgres database
* [https://graphql-ruby.org/](`graphql`)
* ActionCable channel for GraphQL subscriptions
* [Response compression with Deflater and Brotli](https://pawelurbanek.com/rails-gzip-brotli-compression)

## Front end

* React 17.0.2
* [`typescript`](https://github.com/microsoft/typescript)
* [`apollo-client`](https://github.com/apollographql/apollo-client)
* SCSS compilation through Webpack
* Jest/React Testing Library

## Development

* [Rubocop](https://github.com/rubocop/rubocop)
* [ESLint](https://eslint.org/)
* [stylelint](https://stylelint.io/) with [stylelint-config-rational-order](https://github.com/constverum/stylelint-config-rational-order)
* [rufo](https://github.com/ruby-formatter/rufo)
* VSCode setup for auto-formatting
* [GraphiQL](https://github.com/rmosolgo/graphiql-rails)
* Procfile.dev for [Overmind](https://github.com/DarthSim/overmind)

## Scripts

* `yarn types` to generate TypeScript information from GraphQL queries
* `yarn cosmos` to start Cosmos on port 5000

## TODO

* Dotenv
* Isomorphic i18n
* Guard for types
