'use client';

import { useState, useEffect } from 'react';

export default function PriceInput({ value, onChange, placeholder = 'Nhập giá', required = false }) {
    const [displayValue, setDisplayValue] = useState('');

    // Khi giá trị bên ngoài thay đổi (ví dụ: reset form), cập nhật giá trị hiển thị
    useEffect(() => {
        if (value) {
            setDisplayValue(formatCurrencyInput(value.toString()));
        }
    }, [value]);

    const formatCurrencyInput = (inputValue) => {
        // Loại bỏ ký tự không phải số
        const numericValue = inputValue.replace(/\D/g, '');
        // Định dạng lại số thành dạng tiền tệ
        return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    const handleInputChange = (e) => {
        const rawValue = e.target.value;
        const formattedValue = formatCurrencyInput(rawValue);

        // Cập nhật giá trị hiển thị
        setDisplayValue(formattedValue);

        // Chuyển đổi về dạng số và gửi cho parent component
        const numericValue = parseInt(rawValue.replace(/,/g, ''), 10) || 0; // Nếu không nhập số, trả về 0
        onChange(numericValue);
    };

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">Giá (VND)</label>
            <input
                type="text"
                value={displayValue}
                onChange={handleInputChange}
                placeholder={placeholder}
                className="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
                required={required}
            />
            <p className="text-xs text-gray-500 mt-1">Nhập giá, ví dụ: 1,000,000</p>
        </div>
    );
}
