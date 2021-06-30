# Spack Infinite Loop

This repository reproduces a bug with `spack` that causes it to loop infinitely on certain module graphs.

For more information see [this issue](https://github.com/swc-project/swc/issues/1756).

---

First install dependencies with `yarn install` then run:

```
npx spack
```

In another terminal run `top` and notice that `spack` is using all available CPU cycles.

## Details

This is the module graph:

```
index.js
└── ./ui/store/actions
    ├── ../pages/send/send.utils
    │   ├── ../../helpers/utils/token-util
    │   │   └── ./confirm-tx.util
    │   │       └── ../../store/actions (∞ -> /home/muji/git/consensys/spack-infinite-loop-mvp/ui/store/actions.js)
    │   └── ./send.constants
    │       └── ../../../app/scripts/lib/util
    │           └── ../../../shared/constants/app
    ├── ../../app/scripts/lib/util
    │   └── ../../../shared/constants/app
    └── ../ducks/alerts/unconnected-account
        └── ../../store/actions (∞ -> /home/muji/git/consensys/spack-infinite-loop-mvp/ui/store/actions.js)
```

We can clearly see that the cycle is on `../../store/actions` but the bug itself is triggered by *this particular module graph*. To verify this comment out *any import* in the module graph and the build will succeed - even leaf nodes like `../../../shared/constants/app`!
