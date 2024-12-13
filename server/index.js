import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json()); // Dùng express.json() thay thế body-parser

// Mock dữ liệu sản phẩm
let products = [
    { id: 1, name: 'Áo bóng đá CLB A', price: 300000, description: 'Áo chính hãng CLB A' },
    { id: 2, name: 'Giày bóng đá X', price: 1200000, description: 'Giày thể thao cho sân cỏ' },
    { id: 3, name: 'Áo bóng đá CLB A', price: 300000, description: 'Áo chính hãng CLB A' },
    { id: 4, name: 'Giày bóng đá X', price: 1200000, description: 'Giày thể thao cho sân cỏ' },
    { id: 5, name: 'Áo bóng đá CLB A', price: 300000, description: 'Áo chính hãng CLB A' },
    { id: 6, name: 'Giày bóng đá X', price: 1200000, description: 'Giày thể thao cho sân cỏ' },
];

// Lấy danh sách sản phẩm
app.get('/products', (req, res) => {
    res.json(products);
});

// Thêm sản phẩm mới
app.post('/products', (req, res) => {
    const newProduct = { id: Date.now(), ...req.body };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Cập nhật sản phẩm
app.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const index = products.findIndex((product) => product.id == id);
    if (index > -1) {
        products[index] = { ...products[index], ...req.body };
        res.json(products[index]);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Xóa sản phẩm
app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    products = products.filter((product) => product.id != id);
    res.status(204).send();
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
