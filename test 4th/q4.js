// Create a trap for the following object so private data cannot be accessed 

let userObj = {
    private:{
        dob:"12/3/4"
    },
    public:{
        name:"Anas"
    }
}


console.log(userObj);