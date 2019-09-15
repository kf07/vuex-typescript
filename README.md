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

gettersの要件もstateと同じようにinterfaceで明示する  
interfaceを定義することで整合性のない定義を受け付けないと同時に型推論が可能になる  
getter関数を定義するときプログラマが自由に決められるのは「関数名」と「戻り値」のみ  

このinterfaceを注入できるように先ほどのGetters型を修正  
Mapped Types
```typescript
interface IGetters {
  double: number
  expo2: number
  expo: (amount: number) => number
}

type Getters<S, G> = {
  [K in keyof G]: (state: S,getters: G) => G[K]
}
```