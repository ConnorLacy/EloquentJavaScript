let string = ""
let char = "#"
let spc = " "

//even row: even: spc | odd: char
//odd row: even: char | odd: spc

for (let i = 0 ; i < 8; i++){ 
    for( let j = 0 ; j < 8; j++){
        //even row
        if(i%2==0){
            string += (j%2==0 ? spc : char)
        }   
        //odd row
        else {
            string += (j%2==0 ? char : spc)
        }
    }
    string += "\n"
}

console.log(`${string}`)