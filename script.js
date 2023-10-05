// array of ids of buttons
let but = [null, 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9'];

// all possible entries
let possibleWays = ['0', 'X'];

// array in which we store our already selected button ids
let clicked = Array()

// current entry
let current = '0'

// function to find dijoint of two arrays
function disJoint(){
    var diff = but.slice(1).filter(function(x) {
        return clicked.indexOf(x) < 0;
      });
      return diff
}

// function returning id object , for later use
function hfid(id) { // convert html id to a string of its respective innerHtml
    return document.getElementById(id).innerHTML
}

// main function handeling clicks
function clickBut(name) {

    // checking if match is drawn or not
    if (!clicked.includes(name) && clicked.length<=9) {

        // pushing clicked button id in 'clicked' array defined above
        clicked.push(name)

        // finding disjoint of clicked and possible ids ,
        // and picking a random element from them
        let pc = disJoint().slice(1)[Math.floor(Math.random()*disJoint().slice(1).length)]; // select a random element out of an array

        // checking if its users turn or computers turn
        if (current == '0') {
            document.getElementById(but[name.slice(-1)]).innerHTML = "X"
            current = 'X'
        }

        // pc selecting a random cell to fill , it from )
        setTimeout(()=>{
            document.getElementById(pc).innerHTML = "0"
            current = '0'
            clicked.push(pc)
        },300)

        // all possible ways a player can win
        let possibleWinner = [[hfid(but[1]),hfid(but[2]),hfid(but[3])],
        [hfid(but[1]),hfid(but[5]),hfid(but[9])],
        [hfid(but[1]),hfid(but[4]),hfid(but[7])],
        [hfid(but[3]),hfid(but[6]),hfid(but[9])],
        [hfid(but[7]),hfid(but[8]),hfid(but[9])],
        [hfid(but[4]),hfid(but[5]),hfid(but[6])],
        [hfid(but[3]),hfid(but[5]),hfid(but[7])],
        [hfid(but[2]),hfid(but[5]),hfid(but[9])]
        ]

        // checking if , after current changes matrix resembling
        // any of the possible win's pattern

        // looping over to check
        for(let i=0;i<8;i++){

            let arr1Current = possibleWinner[i]

            if(arr1Current[0]=='X' && arr1Current[1]=='X' && arr1Current[2]=='X'){
                alert('X won')
                location.reload()
            }
            else if(arr1Current[0]=='0' && arr1Current[1]=='0' && arr1Current[2]=='0'){
                alert('0 won')
                location.reload()
            }
            else if(clicked.length==8){
                alert('draw')
                location.reload()
            }
            else{
                continue
            }
        }
    }
    else{
        alert('draw')
        location.reload()
    }

}


