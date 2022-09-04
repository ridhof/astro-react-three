# Asto React Three 

Astro React Three is a learning repository for myself towards Three.js especially by using Astro, React, react-three/fiber, and react-three/drei.

As for the reference, I'm using [Astro + Three.js + React で3Dモデルを表示する](https://zenn.dev/submax/articles/astro-react-three) by [harumaxy](https://github.com/harumaxy).

## @react-three/drei the corncerning issue for myself

So like, recently, on September 3rd 2022, if you install `@react-three/drei` with any version (9.22.9, 9.22.5, 9.22.0), you will get an error message like this during `npm start dev`:

```
No matching export in "node_modules/three/build/three.module.js" for import "ParametricGeometry"

    node_modules/three-stdlib/geometries/ParametricGeometries.js:1:18:
      1 │ import { Vector3, ParametricGeometry, BufferGeometry,...
        ╵                   ~~~~~~~~~~~~~~~~~~
```

Apparently someone already created an issue in drei, [ParametricGeometry not exported from three -> build error #1029](https://github.com/pmndrs/drei/issues/1029), and it's just been solved this morning by this PR, [export 'ParametricGeometry' (imported as 'ParametricGeometry') was not found in 'three' #178](https://github.com/pmndrs/three-stdlib/issues/178).

So what is the point of this issue?
`@react-three/drei` (drei) is a wrapper of another wrapper library, `pmndrs/three-stdlib`.
Drei is forcing dev to install certain version of three-stdlib, without the ability for us, dev, to install certain version from it.
It causes things can go borked anytime the core of `three.js` changed and `three-stdlib` hasn't cover it.

It leads me to keep wondering if I should keep using Drei or not.
But one thing for sure, Drei should let dev to install `pmndrs/three-stdlib` and `threejs` separately so the dev can install certain version they want to.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
