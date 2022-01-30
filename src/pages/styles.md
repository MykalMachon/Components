---
layout: ../layouts/ArticleLayout.astro
title: Styles
draft: false
category: '-'
---

# Styles

I use a combination of hand-written SCSS and [Adam Argyle's Open-Props](https://open-props.style/) to build all of my styles.

By keeping a set of consistent "tokens" via Open-Props, I can build much more consistent, flexible UI's without the restriction / sytnactic sugar that comes along with strictly utility based tooling (like [TailwindCSS](https://tailwindcss.com/)).

While this approach definitely loses out on raw development speed when comapred to Tailwind, I think it allows for more code re-use with the same amount of flexibility.
