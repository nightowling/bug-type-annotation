# Minimal reproduction for error

```
This is likely not portable. A type annotation is necessary.ts(2742)
```

## Steps

1. cd into `project_a`
2. install deps for `project_a`
3. yarn build
4. yarn link
5. Repeat for `project_b` (except: no linking, ie. step 4.)
6. yarn link "bug-type-annotation-a"
7. Open /project_b/index.ts
8. See error

```
The inferred type of 'ABC' cannot be named without a reference to 'bug-type-annotation-a/node_modules/mobx-state-tree'. This is likely not portable. A type annotation is necessary.ts(2742)

```

# Relevant links when troubleshooting
(no luck in following their steps)
- https://github.com/microsoft/TypeScript/issues/47663
- https://github.com/microsoft/TypeScript/issues/29808
