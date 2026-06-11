function format(first, middle, last) {
    return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
/**
 * Converts a hex color to RGB string
 * @param hex Hex color string
 * @returns RGB string e.g. "255, 255, 255"
 */
function hexToRgb(hex) {
    if (!hex)
        return '0, 0, 0';
    let cleanHex = hex.replace('#', '');
    if (cleanHex.length === 3) {
        cleanHex = cleanHex.split('').map(char => char + char).join('');
    }
    const bigInt = parseInt(cleanHex, 16);
    const r = (bigInt >> 16) & 255;
    const g = (bigInt >> 8) & 255;
    const b = bigInt & 255;
    return `${r}, ${g}, ${b}`;
}

export { format as f, hexToRgb as h };
