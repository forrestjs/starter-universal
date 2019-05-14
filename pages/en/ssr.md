---
slug: ssr
title: Server Side Rendering
description: Server side rendering makes your app fully indexed by search engines
keywords: ssr, server, side, rendering
---

# Server Side Rendering

SSR is a critical feature for any modern web application.

We implement it thanks to [react-ssr](https://marcopeg.com/react-ssr) because we tried
other solutions like [NextJS](https://nextjs.org/) and we think there are few points
that are left unsolved:

1. Progressive loading in the client
2. Nested data loading
3. Component based routing - [react-router](https://reacttraining.com/react-router)
4. Dynamically opt out SSR

---

## Progressive loading in the client

**You should never freeze the user experience waiting from data to be loaded.**
Instead you want to run spinners, loaders and funny text messages Slack style.

In the server - on the other hands - you must await all the data in order to
produce a complete HTML response.

While _NextJS_ choose to await all the data in any circumstance, _ForrestJS_
handles the client and server situations in 2 different ways, under the hood,
without you noticing (if you don't want to).

## Nested data loading

A React application is composable by nature. While is not a top-notch best practice
to nest containers inside components, we think **you are smart enough** to understand
when it is worth to introduce an exception to the rule.

While _NextJS_ asks you to load any piece of data at each page's root componet,
**_ForrestJS_ leaves the decision open** to your specific needs.

You can choose to load everything at the top and implement a tree of pure components,
which we suggest, or **you can decide to deep nest a container** that is in charge of
loading it's own specific data.

The SSR will kindly await all your data requests no matter what.

## Component based routing

If there are two projects that made the React's world a better place are:

- [react-router](https://reacttraining.com/react-router)
- [react-loadable](https://www.npmjs.com/package/react-loadable)

Together they allow do declaratively structure your application in smaller portions,
at any level deep in the rendering tree.

While _NextJS_ and _GatsbyJS_ implement a **page based routing** (which is important
for static website genaration, which we don't support), _ForrestJS_ let you handle
the routing and the code splitting the way you see it better.

You don't really have to have a router at all, or you can implement your own.
_ForrestJS_ doesn't make the decision for you, and in this starter we decided to go
for _react-router_.

## Dynamically opt out SSR

Let's face it: SSR hits on our servers' CPU.

While it is critical to **serve the fastest possible content** to a first comer
and Google bots, you may want to serve a pure client side app to a returning visitor
or a private area.

There is no real point in SSR rendering a piece of the app that is behind login, right?

_ForrestJS_ let you implement a custom logic to decide, route by route, whether to SSR or not:

    // ssr/boot.js

    ...
    shouldRender: req => res.session === null
    ...

This simple example will SSR all the anonymous sessions, and let the client rendering
take over for any authenticated session.

Simple, right?
