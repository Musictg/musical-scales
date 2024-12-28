let skill = document.getElementById("Skill")
let key = document.getElementById("Key")
let btn = document.getElementById("btn")
let go = document.getElementById("GO")
let al = document.getElementById("alert")
btn.addEventListener("click", function(s ,k){
    e = skill.value
    k = key.value
    if(e=="Major"){
        if( k== "C"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
            <h2 id="Go">
             C D E F G A B C
            </h2>
            `
        }else if( k== "C#"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
            <h2 id="Go">
             C# D# F F# G# A# C C#
            </h2>
            `
        }else if( k== "D"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
            <h2 id="Go">
             D E F# G A B C# D
            </h2>
            `
        }else if( k== "D#"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
            <h2 id="Go">
             D# F G G# A# C D D#
            </h2>
            `
        }else if( k== "E"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
            <h2 id="Go">
             E F# G# A B C# D# E
            </h2>
            `
        }else if( k== "F"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
            <h2 id="Go">
             F G A A# C D E F
            </h2>
            `
        }else if( k== "F#"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
            <h2 id="Go">
             F# G# A# B C# D# F F#
            </h2>
            `
        }else if( k== "G"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
            <h2 id="Go">
             G A B C D E F# G
            </h2>
            `
        }else if( k== "G#"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
            <h2 id="Go">
             G# A# C C# D# F G G#
            </h2>
            `
        }else if( k== "A"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
            <h2 id="Go">
             A B C# D E F# G# A
            </h2>
            `
        }else if( k== "A#"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
            <h2 id="Go">
             A# C D D# F G A A#
            </h2>
            `
        }else if( k== "B"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
            <h2 id="Go">
             B C# D# E F# G# A# B
            </h2>
            `
        }
    }else if(e=="Minor"){
        if( k== "C"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
           <h2 id="Go">
             C D D# F G G# A# C
            </h2>
            `
        }else if( k== "C#"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
            <h2 id="Go">
             C# D# E F# G# A B C#
            </h2>
            `
        }else if( k== "D"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
            <h2 id="Go">
             D E F G A A# C D
            </h2>
            `
        }else if( k== "D#"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
             <h2 id="Go">
             D# F F# G# A# B C# D#
            </h2>
            `
        }else if( k== "E"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
            <h2 id="Go">
             E F# G A B C D E
            </h2>
            `
        }else if( k== "F"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
           <h2 id="Go">
             F G G# A# C C# D# F
            </h2>
            `
        }else if( k== "F#"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
          <h2 id="Go">
             F# G# A B C# D E F#
            </h2>
            `
        }else if( k== "G"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
          <h2 id="Go">
             G A A# C D D# F G
            </h2>
            `
        }else if( k== "G#"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
            <h2 id="Go">
             G# A# B C# D# E F# G#
            </h2>
            `
        }else if( k== "A"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
            <h2 id="Go">
             A B C D E F G A
            </h2>
            `
        }else if( k== "A#"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
              <h2 id="Go">
             A# C C# D# F F# G# A#
            </h2>
            `
        }else if( k== "B"){
            al.style.display = "block"
            console.log(al);
            al.innerHTML= `
            <h2 id="Go">
             B C# D E F# G A B
            </h2>
            `
        }
    }
})


