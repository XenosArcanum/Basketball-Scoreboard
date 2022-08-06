//For Calculations//
let home = 0
let guest = 0


const resetBtn = document.getElementById("resetBtn")
const homeScore = document.getElementById("homeScore")
const guestScore = document.getElementById("guestScore")

// -----------------------------------------------//
// Home Score buttons //-------------------------//
const plus1H = document.getElementById("h-plus-1")
const plus2H = document.getElementById("h-plus-2")
const plus3H = document.getElementById("h-plus-3")

    // plus-1 button for Home Score //
    plus1H.addEventListener("click", function(){
        add1H()
    })
    function add1H(){
        home += 1
        homeScore.textContent = home
    }
    
    // plus-2 button for Home Score //
    plus2H.addEventListener("click", function(){
        add2H()
    })
    function add2H(){
       home += 2
       homeScore.textContent = home
    }
    // plus-3 button for Home Score //
    plus3H.addEventListener("click", function(){
        add3H()
    })
    function add3H(){
       home += 3
       homeScore.textContent = home
    }
// -----------------------------------------------//


// -----------------------------------------------//
// Guest Score buttons //-------------------------//
const plus1G = document.getElementById("g-plus-1")
const plus2G = document.getElementById("g-plus-2")
const plus3G = document.getElementById("g-plus-3")


    // plus-1 button for Guest Score //
    plus1G.addEventListener("click", function(){
        add1G()
    })
    function add1G(){
        guest += 1
        guestScore.textContent = guest
    }
    
    // plus-2 button for Guest Score //
    plus2G.addEventListener("click", function(){
        add2G()
    })
    function add2G(){
       guest += 2
       guestScore.textContent = guest
    }
    // plus-3 button for Guest Score //
    plus3G.addEventListener("click", function(){
        add3G()
    })
    function add3G(){
       guest += 3
       guestScore.textContent = guest
    }
// -----------------------------------------------//



// Reset Button //

resetBtn.addEventListener("click", function(){
    reset()
})

function reset() {
    home = 0
    guest = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
}


