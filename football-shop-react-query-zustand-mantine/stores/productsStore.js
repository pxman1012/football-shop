import { create } from 'zustand';

const useProductStore = create((set) => ({
    products: [], // Dữ liệu sản phẩm mặc định
    setProducts: (products) => set({ products }), // Hàm để thay đổi danh sách sản phẩm
}));

export default useProductStore;
