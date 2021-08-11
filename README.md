# eslint-config
Highly opinionated liniting and formatting to aid rapid development of [ARG projects](https://arg.protocol.ai/). 
no nits == more ships 🚢

Including the following plugins:
 - [standard](https://standardjs.com/)
 - [import](https://github.com/import-js/eslint-plugin-import)
 - [jsonc](https://github.com/ota-meshi/eslint-plugin-jsonc/)
 - [yaml](https://github.com/ota-meshi/eslint-plugin-yml)
 - [typescript](https://github.com/typescript-eslint/typescript-eslint)
 - [vue 3](https://github.com/vuejs/eslint-plugin-vue)
 - [prettier](https://github.com/prettier/eslint-plugin-prettier)

Style and standards for: ts, js, vue, yml, json

## Usage:
```sh
npm i -D @app-research/eslint-config

# peerDeps (auto installed for npm >v7)
npm i -D eslint prettier
```

create `.eslintrc` in your project root
```js
{
    extends: '@app-research'
}
```