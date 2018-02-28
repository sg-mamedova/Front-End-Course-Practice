
export default function trim(text, maxLength) {
    const ellipsis = "\u2026";
    const ellipsisLength = ellipsis.length;

    if (maxLength <= 0) {
        throw new RangeError('maxLength must be greater than 0');
    }

    if (text.length <= maxLength) {
        return text;
    }
    const goodText = text.slice(0, maxLength - ellipsisLength);
    return goodText + ellipsis;
    
}

