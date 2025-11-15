**Hi team**

Please find my code assessment below. 

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

> NOTE: https://github.com/samageloff/munchies/pull/2

## Getting Started

First, run the development server:

```bash
yarn install
yarn dev
```

Or build:

```
yarn build
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes (places for improvement):

- UI/UX (all around, matching of Figma, etc.)
- No loading states
- Selected/Active state
- Missing TypeScript interfaces
- Direct API calls bypass caching (accidental)
  - Error in mapping in RestaurantsList and FoodCategories
- No error boundaries 
