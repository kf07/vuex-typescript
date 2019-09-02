# vuex-typescript

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# vuex-typescript

getterごとに型アノテーションを付与
```typescript
const getters = {
  double(state: State) {
    return state.count * 2
  },
  expo2(state: State) {
    return state.count ** 2
  },
  expo(state: State) {
    return amount =>  state.count ** amount
  }
}
```
gettersにまとめて指定するGetters型を定義して一括で付与

```typescript
type Getters<S> = {
  [k: string]: (state: S) => unknown
}

const getters:Getters<State> = {
  double(state) {
    return state.count * 2
  },
  expo2(state) {
    return state.count ** 2
  },
  expo(state) {
    return amount =>  state.count ** amount
  }
}
```