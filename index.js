var GenerateButton = document.getElementById("genBtn");
let l = new Set();
GenerateButton.onclick = function () {
    var ex1 = document.getElementById("items");

    var ex2 = document.createElement('b');

    //var num = Math.floor(Math.random() * 50) + 1;
    
    if (l.size>=99){
        window.alert('Finished');
        throw "exit";
    }
    else{
        var num = generateNumbersRandom(l);

    }
    

    if (l.has(num)) {

    }
    else {
        l.add(num);
        if (ex1.hasChildNodes()) {
            let j = ex1.children;

            for (k of j) {

                ex1.removeChild(k);

            }

        }
        ex2.style.fontSize = "50px";
        ex2.style.fontFamily = "Algerian";
        for (let i of l) {
            ex2.innerText = i;

        }


        ex1.appendChild(ex2);



    }

    /*let ans = document.getElementsByClassName("seen")[0];
    let html = "";
    for (m of l) {

        html += `<li>${m}</li>`;

    }
    ans.innerHTML = html;
    */
    for (var counter = 1; counter <= 99; counter++) {
        let elem = document.getElementById(counter);
        for (m of l) {

            if (counter == m) {

                elem.innerText = m;
                if (m % 2 == 0) {

                    elem.style.backgroundColor = "green";

                }
                else if (m % 2 != 0) {
                    elem.style.backgroundColor = "purple";
                }

                elem.style.color = "white";
            }

        }

    }






};

function generateNumbersRandom(s) {

    var randomnum = Math.floor(Math.random() * 99) + 1;
    
    if (l.has(randomnum)) {
        console.log('duplicate number: ', randomnum);
        var nums =  generateNumbersRandom(s);
        return nums;
    
    }

    console.log('Number is : ', randomnum);


    return randomnum;

}