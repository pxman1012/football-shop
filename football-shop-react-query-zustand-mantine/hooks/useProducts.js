import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axiosInstance from '@/utils/axiosInstance';

// Hook để lấy danh sách sản phẩm
export const useGetProducts = () => {
    return useQuery({
        queryKey: ['products'],  // queryKey cần được truyền dưới dạng mảng
        queryFn: async () => {
            const { data } = await axiosInstance.get('/products');
            return data;
        },
    });
};

// Hook để thêm sản phẩm mới
export const useAddProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (newProduct) => axiosInstance.post('/products', newProduct), // mutationFn thay cho hàm gọi API
        onSuccess: () => {
            // Sau khi thêm sản phẩm, invalidate cache để cập nhật danh sách
            queryClient.invalidateQueries(['products']);
        },
    });
};

// Hook để cập nhật sản phẩm
export const useUpdateProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, ...updatedProduct }) =>
            axiosInstance.put(`/products/${id}`, updatedProduct),
        onSuccess: () => {
            // Sau khi cập nhật sản phẩm, invalidate cache
            queryClient.invalidateQueries(['products']);
        },
    });
};

// Hook để xóa sản phẩm
export const useDeleteProduct = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id) => axiosInstance.delete(`/products/${id}`),
        onSuccess: () => {
            // Sau khi xóa sản phẩm, invalidate cache
            queryClient.invalidateQueries(['products']);
        },
    });
};
