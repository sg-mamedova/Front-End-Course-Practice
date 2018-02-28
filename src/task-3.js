
export default function sumDigits(n) {
    const nArr = n.toString();
    let sum = 0;

    for (let i = 0; i < nArr.length; i++) {
        sum += Number(nArr[i]);
    }
    return sum;
}
