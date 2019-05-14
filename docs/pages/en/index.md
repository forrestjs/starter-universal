---
slug: index
locale: en
title: Table of Contents
---

# Welcome

This is a starter kit that you can use with the [Forrest CLI](https://www.npmjs.com/package/forrest) for a very quick project kickoff:

    npx forrest run my-project

(Learn more about [react-ssr](https://marcopeg.com/react-ssr))

## About This Website

This is a small **demonstrational feature** that is composed of a server (GraphQL Endpoint)
and client part.

In the server we watch a `/pages` folder for [**Markdown**](https://daringfireball.net/projects/markdown/syntax) files and parse their _frontmatter_
for meta informations.  
Pages are cached in memory with an invalidation policy on change.

In the client we use _Redux_, _React Router_ and _React INTL_ to produce a rich navigation
experience through **multi-language content** with an independent **multi-language interface**.