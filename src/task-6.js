
export default function getStats(data) {

    let minEl = null;
    let maxEl = null;
    let avg = null;
    let sumEl = 0;
    const arrLength = data.length;

    data.sort((a, b) => a - b);

    if (arrLength === 0) {

        return {
            min: minEl,
            max: maxEl,
            avg
        };

    }

    minEl = data[0];
    maxEl = data[arrLength - 1];

    for (let i = 0; i < arrLength; i++) {
        sumEl += data[i];
    }

    avg = sumEl / arrLength;

    return {
        min: minEl,
        max: maxEl,
        avg
    };
    

}
