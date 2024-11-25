# 📱 SYN Berlin - UI Development & Testing

> Webpack, Pug, Sass

## Why does this repository exist?

When working on personal projects or team-based tasks, I often struggled during the initial design phase. It felt overwhelming trying to decide what to plan and prioritize, and I ended up hesitating to contribute ideas or even finishing the project.
After talking to professionals in the field(Big thanks to Chaehyuk from KDB and Christopher from Audibene), they suggested **focusing on designing an entire architecture independently to truly understand the process**. They also encouraged me **to stay true to my creative vision—the fun ideas and user-first solutions I originally imagined—without worrying too much about technical limitations at first**. In today’s world, the tech to make it happen is almost always out there.

With that advice in mind, I realized that the real challenge lies in refining the details, iterating constantly, and scaling the vision into something big.

## My process, step by step

### Wireframes & UX/UI Design

I started by sketching out wireframes and simple UX/UI designs in _Figma_. I also **documented detailed specs for the main features and mapped out the user flows**.

### Technical sketches & prototyping

Next, I started translating my ideas into technical sketches—laying out the foundation for how the app might be built. This way, I could **create something flexible and modular, ready to migrate to any stack or framework later while saving effort when coding and implementing features**.

The stack I chose to kick things off:

- _Pug_: A powerful HTML template engine that simplifies markup by removing the need for repetitive tags. Its include functionality makes layouts much cleaner, and it supports logic with if statements and loops for reuse.

- _Sass_: Perfect for reusable styles. Sass lets me write cleaner, modular CSS, with support for features like variables, mixins (like functions for styles), and more.

Both Pug and Sass share a focus on reusable logic, which drastically cuts down the amount of code I need to write.

- _Webpack_: My build tool of choice. Webpack takes care of bundling and optimizing everything—Pug, Sass, JavaScript, and any other assets—so the browser loads them efficiently. It ensures my files stay fast and lightweight, improving performance.

Also, I manage _package.json_ to handle the whole dev production with dependencies and npm command.

If we need JavaScript logic using Babel and maybe even dabble in UI testing with Cypress down the line in future.

## Why is this valuable?

This repo documents my journey in **building a scalable and reliable app environment from scratch, step by step, while ensuring everything stays modular and adaptable**.

I’ve mostly worked with heavy setups like Create React App before, so this project gave me a chance to experiment with lighter, more customizable tools and learn how to start small but build in a way that’s ready for growth.

## 📟 Getting Started

```
npm run dev
```
