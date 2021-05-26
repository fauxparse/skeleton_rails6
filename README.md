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

## Front end

* React 17.0.2
* [`typescript`](https://github.com/microsoft/typescript)
* [`apollo-client`](https://github.com/apollographql/apollo-client)
* SCSS compilation through Webpack
* Jest/React Testing Library

## Development

* Rubocop
* ESLint
* VSCode setup for auto-formatting with ESLint/StyleLint/Rufo
* GraphiQL
* Procfile.dev for Overmind

## Scripts

* `yarn types` to generate TypeScript information from GraphQL queries
* `yarn cosmos` to start Cosmos on port 5000

## TODO

* RSpec/RSpec Mocks/Shoulda/Timecop
* FactoryBot
* Dotenv
* Isomorphic i18n
* Stylelint config
* Guard for types
