function get_array() {
    var arr = [];
    for (var i=1; i<=255; i++) {
        arr.push(i);
    };
    // send the array to the console
    console.log(arr);
    return arr; 
};
//run the function
get_array();