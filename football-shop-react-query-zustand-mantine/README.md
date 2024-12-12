## Structure
```
football-shop/
├── app/                   
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── products/          # Module quản lý sản phẩm
│       ├── page.js        # Trang hiển thị danh sách sản phẩm
│       ├── add.js         # Trang thêm sản phẩm mới
│       ├── [id]/edit.js   # Trang sửa sản phẩm
├── components/            # UI Components
│   ├── ProductForm.js     # Form thêm/sửa sản phẩm
│   ├── ProductCard.js     # Card hiển thị từng sản phẩm
│   ├── ReactQueryProvider.js # React Query setup
├── hooks/                 # React Query hooks
│   ├── useProducts.js     # Custom hooks CRUD cho sản phẩm
├── stores/                # Zustand store
│   ├── productsStore.js   # Quản lý trạng thái sản phẩm
├── utils/                 # Utilities
│   ├── axiosInstance.js   # Axios configuration
├── server/                # Express API
│   ├── index.js           # API CRUD logic

```

## Setting
```
npm install @mantine/core @mantine/hooks @tanstack/react-query @tanstack/react-query-devtools zustand axios
```