'use client';

import { useState, useEffect } from 'react';
import ProductForm from '@/components/ProductForm';
import { useGetProducts, useUpdateProduct } from '@/hooks/useProducts';
import { useRouter } from 'next/navigation';

export default function EditProductPage({ params }) {
    const { data: products } = useGetProducts();
    const updateProduct = useUpdateProduct();
    const router = useRouter();

    const productId = parseInt(params.id);
    const product = products?.find((p) => p.id === productId);

    const handleUpdateProduct = (updatedProduct) => {
        updateProduct.mutate({ id: productId, ...updatedProduct }, {
            onSuccess: () => router.push('/products'),
        });
    };

    if (!product) return <div>Product not found</div>;

    return <ProductForm initialData={product} onSubmit={handleUpdateProduct} />;
}
