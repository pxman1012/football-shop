## Structure
```
football-shop/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── products/
│   │   ├── page.js
│   │   ├── add.js
│   │   ├── [id]/
│   │   │   └── edit.js
├── components/
│   ├── ProductForm.js
│   ├── ProductCard.js
├── hooks/
│   ├── useProducts.js
├── stores/
│   └── productsStore.js
├── utils/
│   └── axiosInstance.js
├── server/
│   └── index.js
├── app/
│   └── globals.css
├── tailwind.config.js
└── package.json
```

## Setting
```
npm install @mantine/core @mantine/hooks @tanstack/react-query @tanstack/react-query-devtools zustand axios
```