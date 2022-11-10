function reverse_triangle(size) {
    let str = "";
    for (let i = 0; i < size; i++) {
        str = "*";
        space =  " ";
        console.log(`${space.repeat(i)} ${str.repeat(size-i)}`);
    }
}
