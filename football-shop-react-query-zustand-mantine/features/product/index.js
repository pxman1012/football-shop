'use client';

import { useState } from 'react';
import { useGetProducts, useAddProduct, useUpdateProduct, useDeleteProduct } from '@/hooks/useProducts';
import Modal from '@/components/Modal';
import ProductForm from '@/components/ProductForm';
import { formatCurrency } from '@/utils/formatCurrency';

export default function ProductsPage() {
    const { data: products, isLoading } = useGetProducts();
    const addProduct = useAddProduct();
    const updateProduct = useUpdateProduct();
    const deleteProduct = useDeleteProduct();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState('add'); // "add" hoặc "edit"
    const [currentProduct, setCurrentProduct] = useState(null); // Lưu thông tin sản phẩm hiện tại (nếu edit)

    const handleOpenModal = (mode, product = null) => {
        setModalMode(mode);
        setCurrentProduct(product);
        setIsModalOpen(true);
    };

    const handleSubmit = (productData) => {
        if (modalMode === 'add') {
            addProduct.mutate(productData);
        } else if (modalMode === 'edit') {
            updateProduct.mutate({ id: currentProduct.id, ...productData });
        }
        setIsModalOpen(false);
    };

    if (isLoading) return <div className="text-center text-xl">Loading...</div>;

    return (
        <div className="p-6 mx-auto max-w-[1200px]">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Sản phẩm bóng đá</h2>
            <button
                onClick={() => handleOpenModal('add')}
                className="px-6 py-2 bg-green-600 text-white rounded-lg mb-4 hover:bg-green-700 transition duration-300"
            >
                Thêm Sản Phẩm Mới
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img
                            src={product.image || '/img/cr7.jpg'} // Kiểm tra nếu không có ảnh thì dùng ảnh mặc định
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                            <p className="text-lg text-gray-900 mt-4">Price: {formatCurrency(product.price)}</p>
                            <div className="mt-4 flex justify-between">
                                <button
                                    onClick={() => handleOpenModal('edit', product)}
                                    className="text-blue-600 hover:underline"
                                >
                                    Sửa
                                </button>
                                <button
                                    onClick={() => deleteProduct.mutate(product.id)}
                                    className="text-red-600 hover:underline"
                                >
                                    Xóa
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && (
                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    title={modalMode === 'add' ? 'Thêm Sản Phẩm' : 'Sửa Sản Phẩm'}
                >
                    <ProductForm
                        initialData={currentProduct}
                        mode={modalMode}
                        onSubmit={handleSubmit}
                        cancel={() => setIsModalOpen(false)}
                    />
                </Modal>
            )}
        </div>
    );
}
