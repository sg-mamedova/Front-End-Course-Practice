
export default function convertToRoman(n) {
    let romDigit = "";
    switch (n) {
        case 1: romDigit = "I";
            break;
        case 5: romDigit = "V";
            break;
        case 10: romDigit = "X";
            break;
        case 50: romDigit = "L";
            break;
        case 100: romDigit = "C";
            break;
        case 500: romDigit = "D";
            break;
        case 1000: romDigit = "M";
            break;
        default:
            romDigit = "WAT?";
    }

    return romDigit;
}

