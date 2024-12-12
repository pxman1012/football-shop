// import { useState } from 'react';
// import { TextInput, Textarea, Button, Group } from '@mantine/core';

// export default function ProductForm({ onSubmit, initialData = {} }) {
//     const [name, setName] = useState(initialData.name || '');
//     const [price, setPrice] = useState(initialData.price || 0);
//     const [description, setDescription] = useState(initialData.description || '');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSubmit({ name, price, description });
//     };

//     return (
//         <form onSubmit={handleSubmit} className="space-y-4">
//             <TextInput
//                 label="Tên sản phẩm"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Tên sản phẩm"
//                 required
//             />
//             <TextInput
//                 label="Giá"
//                 type="number"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//                 placeholder="Giá sản phẩm"
//                 required
//             />
//             <Textarea
//                 label="Mô tả"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 placeholder="Mô tả sản phẩm"
//                 required
//             />
//             <Group position="right">
//                 <Button type="submit" color="blue">Lưu sản phẩm</Button>
//             </Group>
//         </form>
//     );
// }


'use client';

import { useState } from 'react';

export default function ProductForm({ initialData, onSubmit }) {
    const [name, setName] = useState(initialData?.name || '');
    const [price, setPrice] = useState(initialData?.price || '');
    const [description, setDescription] = useState(initialData?.description || '');
    const [image, setImage] = useState(initialData?.image || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, price, description, image });
    };

    return (
        <div className="max-w-xl mx-auto p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Chỉnh sửa sản phẩm</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Tên sản phẩm */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Nhập tên sản phẩm"
                    />
                </div>

                {/* Giá sản phẩm */}
                <div className="mb-4">
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">Giá sản phẩm</label>
                    <input
                        id="price"
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Nhập giá sản phẩm"
                    />
                </div>

                {/* Mô tả sản phẩm */}
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">Mô tả sản phẩm</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Nhập mô tả sản phẩm"
                    />
                </div>

                {/* Ảnh sản phẩm */}
                <div className="mb-4">
                    <label htmlFor="image" className="block text-sm font-medium text-gray-700">URL ảnh sản phẩm</label>
                    <input
                        id="image"
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="URL của ảnh sản phẩm"
                    />
                </div>

                {/* Nút gửi */}
                <div className="mt-6 text-right">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Lưu thay đổi
                    </button>
                </div>
            </form>
        </div>
    );
}
