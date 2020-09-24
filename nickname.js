// event listeners

document.getElementById("generateNickname").addEventListener("click", Gathername)
document.getElementById("show all").addEventListener("click", AllNames)
//global variables

   let nameArray = ["destroyer", "coder", "powerful", "hardworking", "hiker", "procrastinator", "optimist", "mysterious", "leader", "experienced", "winner", "follower", "wise", "master", "thoughtful", "teacher" ]

//functions
function createNickname(firstName, lastName){
    document.getElementById("nickname").innerHTML = firstName + " " + lastName + " the " + nameArray[Math.floor(Math.random() * 15)]
}

function Gathername(){
    //local variables
    let Name1 = document.getElementById("firstName").value
    let Name2 = document.getElementById("lastName").value
    //send to function
    createNickname(Name1, Name2)
}

function AllNames() {
    let Name1 = document.getElementById("firstName").value
    let Name2 = document.getElementById("lastName").value
    allNames(nameArray, Name1, Name2)
}

function allNames(array, firstName, lastName) {
        document.getElementById("nickname").innerHTML = firstName + " " + lastName + " the " + array     
}