export const formatNumber = (number = '123456') => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}