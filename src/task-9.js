
export default function merge(data) {

    const result = {};

    for (let i = 0; i < data.length; i++) {

        for (const key in data[i]) {

            if (result[key]) {
                result[key].push(data[i][key]);
            } else {
                result[key] = data[i][key];
                const keyVal = result[key];
                const keyArr = [];
                keyArr.push(keyVal);
                result[key] = keyArr;
            }
        }
    }

    return result;

}
