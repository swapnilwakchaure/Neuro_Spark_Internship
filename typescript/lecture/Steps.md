1. npm init -y
2. npm install typescript -g  ( install typescript globally )
3. tsc -v ( to check version of typescript )
4. npm list -g ( to check install packages which are globally of locally )
5. create tsconfig.json file and paste the below code inside

```js

{
    "include": ["src"],
    "exclude": ["node modules"],
    "compilerOptions": {
        "module": "commonjs",
        "outdir": "build",
        "target": "es2017",
        "declaration": true,
        "sourceMap": true
    }
}

```

6. add below comman inside package.json file to run typescript
   "build": "tsc --watch"
7. create src folder
8. create index.ts file inside src folder
9. 