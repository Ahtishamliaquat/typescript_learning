//     nested object

type Auther = {
    fname: string;
    lname: string;
}
type Book ={
    auther: Auther
    name: string;
}

let Knowledgebook: Book ={
    auther:{
        fname:"Paul",
        lname: "Sheard"
    },
    name: "The power of Money"
}