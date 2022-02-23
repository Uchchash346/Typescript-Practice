const myFunc = (a: string, b: string, c?: string = "True") => {
    console.log(c)
    console.log(`Hello ${a} ${b}`);
};

myFunc("A", "B", "false")