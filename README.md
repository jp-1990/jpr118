# JPR \#118

A server-side rendered static site, linked to a Contentful CMS via GraphQL, built using Gatsby.

![Showcase gif](./src/images/jpr_showcase.gif)
**Hosted on Netlify**  
https://jpr118.netlify.app

## Summary

This site was designed as a simple project to enable me to gain some experience using TailwindCSS, as well as experiment with programmatically creating pages using Gatsby and GraphQL. The content is largely placeholder text, built on the premise of a content delivery site which I might have used to document my adventures into motorcycle racing. The project is largely a playground for me to investigate technologies new to me, however it could also be fully built out to fulfill its hypothetical role if need be.

## What I learned

This project acted as a simple extension to my knowledge of Gatsby and GraphQL (gained when building my portfolio), with a few additional extras. The portfolio only makes use of a single page, so I wanted to experiment with programatically creating pages, a key benefit to using Gatsby and GraphQL together with a CMS.

The amount of hype surrounding Tailwind had gained my interest, though I had not enjoyed my previous framework-based styling solution, in the form of MaterializeCSS. I found Tailwind to offer a much less oppressive solution, which certainly made responsive design easier. My only concern with it, is the implementation of precise layouts, where you might end up creating so many custom extensions that you might as well have just written the CSS using Sass and CSS Modules. The potentially long class names in the JSX are also hard to read, however structure can be regained through commenting, in place of normal class names.

## Technologies Used

- HTML
- CSS
- TailwindCSS
- JavaScript
- Gatsby
- GraphQL
- Contentful
