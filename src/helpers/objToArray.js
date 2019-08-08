export default object => {
    let array = Object.keys(object).map(function(key) {
        return object[key];
    });

    return array;
}
