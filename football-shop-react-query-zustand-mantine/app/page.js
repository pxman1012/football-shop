'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center p-6">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
                Welcome to Football Shop!
            </h1>
            <p className="text-lg text-gray-700 mb-6">
                Chào mừng bạn đến với cửa hàng đồ bóng đá của chúng tôi! Tại đây, bạn có thể tìm thấy tất cả các sản phẩm bóng đá như giày, áo, bóng, phụ kiện và nhiều hơn nữa.
            </p>
            <button
                onClick={() => router.push('/products')}
                className="px-6 py-3 bg-blue-600 text-white rounded-full text-xl hover:bg-blue-700 transition duration-300"
            >
                Xem Sản Phẩm
            </button>
        </div>
    );
}
