// 'use client';

// import { Button, TextInput, Textarea, Group, Loader } from '@mantine/core';
// import ProductForm from '@/components/ProductForm';
// import { useAddProduct } from '@/hooks/useProducts';
// import { useRouter } from 'next/navigation';

// export default function AddProductPage() {
//     const addProduct = useAddProduct();
//     const router = useRouter();

//     const handleAddProduct = (product) => {
//         addProduct.mutate(product, {
//             onSuccess: () => router.push('/products'),
//         });
//     };

//     return (
//         <div className="p-6">
//             <TextInput
//                 label="Tên sản phẩm"
//                 placeholder="Nhập tên sản phẩm"
//                 mb="md"
//             />
//             <TextInput
//                 label="Giá"
//                 placeholder="Nhập giá sản phẩm"
//                 mb="md"
//                 type="number"
//             />
//             <Textarea
//                 label="Mô tả"
//                 placeholder="Nhập mô tả sản phẩm"
//                 mb="md"
//             />
//             <Group position="right">
//                 <Button color="blue" onClick={handleAddProduct}>Thêm Sản Phẩm</Button>
//             </Group>
//         </div>
//     );
// }


'use client';

import { useAddProduct } from '@/hooks/useProducts';
import { useRouter } from 'next/navigation';

export default function AddProductPage() {
    const addProduct = useAddProduct();
    const router = useRouter();

    const handleAddProduct = (product) => {
        addProduct.mutate(product, {
            onSuccess: () => router.push('/products'),
        });
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            {/* Tên sản phẩm */}
            <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Nhập tên sản phẩm"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Giá sản phẩm */}
            <div className="mb-4">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Giá</label>
                <input
                    id="price"
                    type="number"
                    placeholder="Nhập giá sản phẩm"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Mô tả sản phẩm */}
            <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Mô tả</label>
                <textarea
                    id="description"
                    placeholder="Nhập mô tả sản phẩm"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {/* Nút Thêm sản phẩm */}
            <div className="mt-6 text-right">
                <button
                    onClick={() => handleAddProduct({ name: "Tên sản phẩm", price: 1000, description: "Mô tả sản phẩm" })}
                    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                >
                    Thêm Sản Phẩm
                </button>
            </div>
        </div>
    );
}
