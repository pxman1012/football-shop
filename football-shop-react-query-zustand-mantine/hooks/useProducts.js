import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/utils/axiosInstance';

export const useGetProducts = () => {
    return useQuery(['products'], async () => {
        const { data } = await axiosInstance.get('/products');
        return data;
    });
};

export const useAddProduct = () => {
    const queryClient = useQueryClient();
    return useMutation(
        (newProduct) => axiosInstance.post('/products', newProduct),
        {
            onSuccess: () => queryClient.invalidateQueries(['products']),
        }
    );
};

export const useUpdateProduct = () => {
    const queryClient = useQueryClient();
    return useMutation(
        ({ id, ...updatedProduct }) =>
            axiosInstance.put(`/products/${id}`, updatedProduct),
        {
            onSuccess: () => queryClient.invalidateQueries(['products']),
        }
    );
};

export const useDeleteProduct = () => {
    const queryClient = useQueryClient();
    return useMutation(
        (id) => axiosInstance.delete(`/products/${id}`),
        {
            onSuccess: () => queryClient.invalidateQueries(['products']),
        }
    );
};
