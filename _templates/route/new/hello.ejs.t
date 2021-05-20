---
inject: true
to: packages/shared/src/routes/<%= name %>.ts
after: \/\*\* Inject new routes here \*\/
---
const hello = ```
Hello!
This is your first hygen template.

Learn what it can do here:

https://github.com/jondot/hygen
```

console.log(hello)


