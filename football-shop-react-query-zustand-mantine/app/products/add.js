'use client';

import ProductForm from '@/components/ProductForm';
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

    return <ProductForm onSubmit={handleAddProduct} />;
}
