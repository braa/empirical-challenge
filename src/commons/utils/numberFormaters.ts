export const formatUSD = (value: number | string): string => {
    const numberValue = +value;
    const numberFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    return numberFormat.format(numberValue);
}

export const formatNumber = (value: number | string): string => {
    const numberValue = +value;
    const numberFormat = new Intl.NumberFormat('en-US');
    return numberFormat.format(numberValue);
}