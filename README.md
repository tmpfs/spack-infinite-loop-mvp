## Spack Infinite Loop

This repository reproduces a bug with `spack` that causes it to loop infinitely on certain module graphs.

For more information see [this issue](https://github.com/swc-project/swc/issues/1756).

---

First install dependencies with `yarn install` then run:

```
npx spack
```

In another terminal run `top` and notice that `spack` is using all available CPU cycles.
