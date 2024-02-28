# ServiceNow SDK Demo Repo

## Known issues and workarounds
Currently if we want to use typescript, we have to build it to javascript using a compiler. The compiler options is defined in `tsconfig.json` file. The `now-sdk build` does not build the dependencies when `tsconfig.json` is present in the root directory of the project. As a work around, we can configure the npm build script to temporarily rename `tsconfig.json` so that `now-sdk build` can build the dependencies correctly. This issue is on now-sdk v1.0.3

```javascript
//package.json
{
      "scripts": {
        "build": "tsc --build --clean && tsc --build && mv tsconfig.json tsconfig.json.bak && now-sdk build && mv tsconfig.json.bak tsconfig.json"
    },
}
```
