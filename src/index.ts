// let message: string|number = "hello TypeScript";

// console.log(message);

// // let rawData ;

// type RawData = boolean | string | number |null | undefined;

// let name : RawData = 30;

// console.log(name)



interface IManagement {
    staffId: number | string,
    staffName: string
}


interface IStudent {
    StudentId?: number | string,
    StudentName?: string
}

type intersectedType = IManagement & IStudent

let  campusDAta : intersectedType = {
    staffId:10001,
    staffName: "abid",
    StudentId:23231,
    // StudentName : "Danish"
}

console.log(campusDAta);