export const getPropertiesFromObject = (arg) => {
    console.log('getting properties from object', arg)
    const dataArray = []
    for (let o in arg) {
        dataArray.push(arg[o])
    }

    return dataArray
}

export const freezeScroll = () => {
    // Get the current page scroll position
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
    // if any scroll is attempted, set this to the previous value
    return (window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop)
    })
}

export const unfreezeScroll = () => {
    return (window.onscroll = function () {})
}
