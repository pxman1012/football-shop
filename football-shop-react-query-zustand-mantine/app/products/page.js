// 'use client';

// // import { Button, Grid, Group, Loader } from '@mantine/core';
// import { useGetProducts } from '@/hooks/useProducts';
// import { useDeleteProduct } from '@/hooks/useProducts';
// import ProductCard from '@/components/ProductCard';
// import { useRouter } from 'next/navigation';
// import { Button, Grid, Group, Loader } from '@mantine/core';

// export default function ProductsPage() {
//     const { data, isLoading, isError, error } = useGetProducts(); // Lấy dữ liệu từ query
//     const deleteProduct = useDeleteProduct();
//     const router = useRouter();

//     // Xử lý xóa sản phẩm
//     const handleDelete = (productId) => {
//         deleteProduct.mutate(productId); // Gọi API xóa sản phẩm
//     };

//     // Hiển thị loader khi dữ liệu đang được tải
//     if (isLoading) return <Loader size="xl" variant="dots" />;

//     // Hiển thị thông báo lỗi nếu có lỗi xảy ra
//     if (isError) return <div>Error: {error.message}</div>;

//     return (
//         <div className="p-6">
//             <Group position="apart" align="center" mb="lg">
//                 <h2 className="text-xl font-semibold">Sản phẩm bóng đá</h2>
//                 <Button onClick={() => router.push('/products/add')} color="green">
//                     Thêm Sản Phẩm Mới
//                 </Button>
//             </Group>

//             <Grid>
//                 {/* Lặp qua các sản phẩm và hiển thị card */}
//                 {data.map((product) => (
//                     <Grid.Col key={product.id} span={4}>
//                         <ProductCard product={product} onDelete={handleDelete} />
//                     </Grid.Col>
//                 ))}
//             </Grid>
//         </div>
//     );
// }

'use client';

import { useGetProducts } from '@/hooks/useProducts';
import { useDeleteProduct } from '@/hooks/useProducts';
import ProductCard from '@/components/ProductCard';
import { useRouter } from 'next/navigation';

export default function ProductsPage() {
    const { data, isLoading, isError, error } = useGetProducts(); // Lấy dữ liệu từ query
    const deleteProduct = useDeleteProduct();
    const router = useRouter();

    // Xử lý xóa sản phẩm
    const handleDelete = (productId) => {
        deleteProduct.mutate(productId); // Gọi API xóa sản phẩm
    };

    // Hiển thị loader khi dữ liệu đang được tải
    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-green-500"></div>
            </div>
        );
    }

    // Hiển thị thông báo lỗi nếu có lỗi xảy ra
    if (isError) {
        return <div className="text-red-500">Error: {error.message}</div>;
    }

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Sản phẩm bóng đá</h2>
                <button
                    onClick={() => router.push('/products/add')}
                    className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300"
                >
                    Thêm Sản Phẩm Mới
                </button>
            </div>

            {/* Grid of products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Lặp qua các sản phẩm và hiển thị card */}
                {data.map((product) => (
                    <div key={product.id} className="col-span-1">
                        <ProductCard product={product} onDelete={handleDelete} />
                    </div>
                ))}
            </div>
        </div>
    );
}
