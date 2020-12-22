export const getPropertiesFromObject = (arg) => {
    console.log('getting properties from object', arg)
    const dataArray = []
    for (let o in arg) {
        dataArray.push(arg[o])
    }

    return dataArray
}
