export function formatCurrency(amount, locale = 'vi-VN', currency = 'VND') {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    }).format(amount);
}

export function formatCurrencyCustom(amount) {
    if (isNaN(amount)) return '0 VND'; // Kiểm tra nếu không phải số
    return `${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND`;
}
