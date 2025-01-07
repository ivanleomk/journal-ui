# Introduction

This is a repository which I put together based off Lee Robinson's [Next Minimal Store](https://t.co/F0PNEHqV0e) repository.

I really liked the way that he built the UI and I wanted to try and build something similar to it.
I was also really inspired by [Mariana Castilho](https://x.com/mrncst)'s work on [[uilabs.com](http://uilabs.dev)] whch had some interesting designs and components.

Notably, because we use the `next/navigation` library, we do the redirect entirely on the client side, allowing for a much smoother experience without jerky reloads. Because we store the state in the URL itself, we can preserve the state of the UI when navigating between pages.

![](./kaizen.gif)

## Instructions

> If you're interested in just trying the UI out, you can play with it at https://journal-ui-one.vercel.app

1. Clone the repository

```
git clone https://github.com/ivanleomk/journal-ui
```

2. Install the dependencies. I used `bun` here but `npm` should work just fine

```
bun install
```

3. Run the development server

```
bun run dev
```

Once you've done so, you'll be able to navigate to `http://localhost:3000` and see the UI.
