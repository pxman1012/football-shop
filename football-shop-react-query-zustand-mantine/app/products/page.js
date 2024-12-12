// 'use client';

// import { useGetProducts, useDeleteProduct } from '@/hooks/useProducts';
// import { useRouter } from 'next/navigation';

// export default function ProductsPage() {
//     const { data, isLoading } = useGetProducts();
//     const deleteProduct = useDeleteProduct();
//     const router = useRouter();

//     if (isLoading) return <div>Loading...</div>;

//     return (
//         <div>
//             <button onClick={() => router.push('/products/add')}>Add Product</button>
//             <ul>
//                 {data.map((product) => (
//                     <li key={product.id}>
//                         {product.name} - {product.price} VND
//                         <button onClick={() => router.push(`/products/${product.id}/edit`)}>Edit</button>
//                         <button onClick={() => deleteProduct.mutate(product.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

'use client';

import { useGetProducts, useDeleteProduct } from '@/hooks/useProducts';
import { useRouter } from 'next/navigation';

export default function ProductsPage() {
    const { data, isLoading } = useGetProducts();
    const deleteProduct = useDeleteProduct();
    const router = useRouter();

    if (isLoading) return <div className="text-center text-xl">Loading...</div>;

    return (
        <div className="p-6">
            <h2 className="text-3xl font-semibold text-blue-600 mb-6">Sản phẩm bóng đá</h2>
            <button
                onClick={() => router.push('/products/add')}
                className="px-6 py-2 bg-green-600 text-white rounded-lg mb-4 hover:bg-green-700 transition duration-300"
            >
                Thêm Sản Phẩm Mới
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((product) => (
                    <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                        <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                        <p className="text-lg text-gray-900 mt-4">Price: {product.price} VND</p>
                        <div className="mt-4 flex justify-between">
                            <button
                                onClick={() => router.push(`/products/${product.id}/edit`)}
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
                ))}
            </div>
        </div>
    );
}
