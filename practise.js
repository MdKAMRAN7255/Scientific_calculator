function a(){
    const d = 5;
    let e = 5;
    function b(){
        console.log(d);
        e = e+5;
        console.log(e);
    }
    b()
}
a()