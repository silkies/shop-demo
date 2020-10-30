# Shop Demo Project (thesis)

Web application that consists of 3 micro-frontends: Product Catalog ([Angular](https://angular.io/)), Navigation Bar ([Vue.js](https://vuejs.org/)) and Related Products ([React](https://reactjs.org/)).

Uses [single-spa](https://single-spa.js.org/) and [single-spa-layout](https://single-spa.js.org/docs/layout-overview).

[Json-server](https://github.com/typicode/json-server) simulates back-end REST service

To run the application:

## Json-server

```shell
json-server --watch db.json 
```

Json-server is available on http://localhost:3000

## Product Catalog (Micro-frontend)

Install dependencies

```shell
npm install 
```

Run application, entry point http://localhost:4200/main.js

```shell
npm run serve:single-spa
```

## Navigation Bar (Micro-frontend)

Install dependencies

```shell
npm install
```

Run application, entry point http://localhost:8081/js/app.js

```shell
npm run serve
``` 

## Related Products (Micro-frontend)

Install dependencies

```shell
npm install
```

Run application, entry point http://localhost:8080/org-related-products-react.js

```shell
npm run start
```

## Root Config (single-spa root config)

Install dependencies

```shell
npm install
``` 

Run application, entry point http://localhost:9000
```shell
npm run start
```

Demo application is available on http://localhost:9000
