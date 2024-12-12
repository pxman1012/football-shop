// import { Card, Text, Button, Group, Badge, Image } from '@mantine/core';
// import { useRouter } from 'next/navigation';

// export default function ProductCard({ product, onDelete }) {
//     const router = useRouter();

//     const handleEdit = () => {
//         router.push(`/products/${product.id}/edit`);
//     };

//     const handleDelete = () => {
//         if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
//             onDelete(product.id);
//         }
//     };

//     return (
//         <Card shadow="sm" padding="lg" radius="md" withBorder>
//             <Card.Section>
//                 {/* Ảnh sản phẩm */}
//                 <Image
//                     src={product.image || '/default-image.jpg'} // Sử dụng ảnh mặc định nếu không có ảnh
//                     alt={product.name}
//                     height={180}
//                     fit="contain"
//                 />
//             </Card.Section>

//             <Text weight={500} size="lg" mt="md">{product.name}</Text>
//             <Text size="sm" color="dimmed" mt="xs">{product.description}</Text>
//             <Text weight={500} size="lg" color="green" mt="md">{product.price} VND</Text>

//             <Group position="apart" mt="md">
//                 {/* Thêm badge nếu cần */}
//                 <Badge color="blue" variant="light">Sản phẩm mới</Badge>

//                 <Group>
//                     <Button variant="outline" color="blue" onClick={handleEdit}>Sửa</Button>
//                     <Button variant="outline" color="red" onClick={handleDelete}>Xóa</Button>
//                 </Group>
//             </Group>
//         </Card>
//     );
// }


'use client';

import { useRouter } from 'next/navigation';

export default function ProductCard({ product, onDelete }) {
    const router = useRouter();

    // Xử lý chỉnh sửa sản phẩm
    const handleEdit = () => {
        router.push(`/products/${product.id}/edit`);
    };

    // Xử lý xóa sản phẩm
    const handleDelete = () => {
        if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
            onDelete(product.id);
        }
    };

    return (
        <div className="border border-gray-300 rounded-md shadow-sm p-4">
            <div className="w-full h-48 bg-gray-200 rounded-md overflow-hidden">
                <img
                    src={product.image || '/default-image.jpg'} // Ảnh mặc định nếu không có ảnh
                    alt={product.name}
                    className="w-full h-full object-contain"
                />
            </div>

            <h3 className="font-semibold text-lg mt-4">{product.name}</h3>
            <p className="text-sm text-gray-500 mt-2">{product.description}</p>
            <p className="font-semibold text-lg text-green-600 mt-4">{product.price} VND</p>

            <div className="flex justify-between items-center mt-4">
                {/* Thêm badge "Sản phẩm mới" */}
                <span className="px-2 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
                    Sản phẩm mới
                </span>

                <div className="flex space-x-2">
                    <button
                        onClick={handleEdit}
                        className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-100 transition duration-300"
                    >
                        Sửa
                    </button>
                    <button
                        onClick={handleDelete}
                        className="px-4 py-2 text-sm font-medium text-red-600 border border-red-600 rounded-md hover:bg-red-100 transition duration-300"
                    >
                        Xóa
                    </button>
                </div>
            </div>
        </div>
    );
}
