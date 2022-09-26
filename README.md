# My first project with typescript, redux, and jest

## Project structure overview
<pre>
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── AddProduct.tsx
│   │   ├── Footer.tsx
│   │   ├── LoginButton.tsx
│   │   ├── NavBar.tsx
│   │   ├── PagePagination.tsx
│   │   ├── Register.tsx
│   │   ├── SearchProducts.tsx
│   │   └── UpdateProduct.tsx
│   ├── index.tsx
│   ├── pages
│   │   ├── Cart.tsx
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Products.tsx
│   │   ├── Profile.tsx
│   │   └── SingleProduct.tsx
│   ├── react-app-env.d.ts
│   ├── redux
│   │   ├── hooks
│   │   │   ├── appHooks.ts
│   │   │   └── useProduct.ts
│   │   ├── reducers
│   │   │   ├── cartReducer.ts
│   │   │   ├── productReducer.ts
│   │   │   └── userReducer.ts
│   │   ├── store.ts
│   │   └── types
│   │       ├── cart.ts
│   │       ├── category.ts
│   │       ├── product.ts
│   │       └── user.ts
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   ├── styles
│   │   ├── components
│   │   │   ├── _footer.scss
│   │   │   ├── _navbar.scss
│   │   │   ├── _register.scss
│   │   │   └── _searchproduct.scss
│   │   ├── index.scss
│   │   └── pages
│   │       ├── _cart.scss
│   │       ├── _home.scss
│   │       ├── _login.scss
│   │       ├── _products.scss
│   │       └── _singleproduct.scss
│   └── test
│       ├── fitures
│       │   └── testProduct.ts
│       ├── reducers
│       │   ├── productReducer.test.ts
│       │   └── userReducer.test.ts
│       └── utils
│           └── testStore.ts
└── tsconfig.json
</pre>

## Key features available at the moment
- Displays products from api in products page.
- Products can be added to cart.
- Basic CRUD operations are avaiable 
- Authentication via google.

## Instruction to start the project

In the project directory, you can run:

### `npm install`

Install all the dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
