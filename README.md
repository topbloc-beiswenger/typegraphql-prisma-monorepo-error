## Summary
This repo is to reproduce the following error in `type-graphql` when using a monorepo structure
with the generated `prisma` resolvers from `typegraphql-prisma` in a separate package.

```
CannotDetermineGraphQLTypeError: Cannot determine GraphQL input type for 'take' of 'FindFirstOrganizationArgs' class. Is the value, that is used as its TS type or explicit type, decorated with a proper decorator or is it a proper input value?
```

## Installation & Running w/ Docker
Prerequisites: Docker Engine

1. With docker engine running, you can build and tag the image within the root directory:
`docker build -t typegraphql-prisma-monorepo .`

2. Run the previously built image
`docker run -p 4000:4000 typegraphql-prisma-monorepo`

## Installation & running w/out Docker
Prerequisites: Node v16.14.2

1. In the root directory run the following
`npm install`
`npm run bootstrap`

2. In the `/prisma` directory run `npm run build`

3. In the `/api` diretory run `npm run start`
