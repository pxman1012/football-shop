// 'use client';

// import { useState, useEffect } from 'react';

// export default function ProductForm({ initialData = {}, onSubmit, mode, cancel }) {
//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');
//     const [price, setPrice] = useState('');

//     useEffect(() => {
//         if (mode === 'edit' && initialData) {
//             setName(initialData.name || '');
//             setDescription(initialData.description || '');
//             setPrice(initialData.price || '');
//         }
//     }, [mode, initialData]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSubmit({ name, description, price });
//     };

//     return (
//         <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//                 <label className="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
//                 <input
//                     type="text"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
//                     required
//                 />
//             </div>
//             <div>
//                 <label className="block text-sm font-medium text-gray-700">Mô tả</label>
//                 <textarea
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
//                     rows="4"
//                     required
//                 />
//             </div>
//             <div>
//                 <label className="block text-sm font-medium text-gray-700">Giá (VND)</label>
//                 <input
//                     type="number"
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                     className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
//                     required
//                 />
//             </div>
//             <div className="flex justify-end gap-2">
//                 <button
//                     className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300"
//                     onClick={cancel}
//                 >
//                     Hủy
//                 </button>
//                 <button
//                     type="submit"
//                     className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-800 transition duration-300"
//                 >
//                     {mode === 'add' ? 'Thêm' : 'Cập nhật'}
//                 </button>
//             </div>
//         </form>
//     );
// }

'use client';

import { useState, useEffect } from 'react';
import PriceInput from '@/components/PriceInput';

export default function ProductForm({ initialData = {}, onSubmit, mode, cancel }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        if (mode === 'edit' && initialData) {
            setName(initialData.name || '');
            setDescription(initialData.description || '');
            setPrice(initialData.price || '');
            setImage(initialData.image || '');
        }
    }, [mode, initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, description, price, image });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
                    required
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Mô tả</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
                    rows="4"
                    required
                />
            </div>
            <PriceInput
                value={price}
                onChange={(value) => setPrice(value)}
                placeholder="Nhập giá sản phẩm"
                required
            />
            {/* <div>
                <label className="block text-sm font-medium text-gray-700">URL Hình Ảnh</label>
                <input
                    type="url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
                />
            </div> */}
            <div className="flex justify-end gap-2">
                <button
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300"
                    onClick={cancel}
                >
                    Hủy
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
                >
                    {mode === 'add' ? 'Thêm' : 'Cập nhật'}
                </button>
            </div>
        </form>
    );
}
