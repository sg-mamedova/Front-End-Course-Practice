
export default function getNthItem(a, n) {
    const S = [];

    S[0] = 0;
    for (let i = 1; i <= n; i++) {
        S[i] = a - 2 * S[i - 1];
    }

    return S[n];
}
