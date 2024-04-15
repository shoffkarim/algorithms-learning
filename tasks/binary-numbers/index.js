const findOne = (num) => {
    let result = num.toString(2); //Converts to binary
    let count = result.split(1); //  count -1 is your answer
    console.log(result.split("1").length - 1);
};

const findOneAnother = (num) => {
    const biNumber = (num >> 0).toString(2);
    let ones = 0;
    for (let i = 0; i < biNumber.length; i++) {
        if (biNumber[i] === "1") {
            ones += 1;
        }
    }
    console.log(ones);
};

findOne(12);

// https://www.notion.so/shoff/06c02d1a45c3441da45af65e22a3b679?pvs=4