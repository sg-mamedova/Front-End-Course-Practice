
export default function getTopLetter(str) {
    const map = new Map();
    let result = ["", 0];

    for (let i = 0; i < str.length; i++) {
        if (map.has(str[i])) {
            const n = map.get(str[i]);
            map.set(str[i], n + 1);
        } else {
            map.set(str[i], 1);
        }

        if (map.get(str[i]) > result[1]) {
            result = [str[i], map.get(str[i])];
        }
    }

    return result[0];
}
