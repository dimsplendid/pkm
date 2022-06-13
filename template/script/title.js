function str_to_title (s) {
    const arr = s.split('-');
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(' ');
}

module.exports = str_to_title;