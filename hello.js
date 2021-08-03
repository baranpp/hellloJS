

    let counter = 0;

        function count() {
        document.querySelector("h3").innerHTML = ++counter;

            if (counter % 10 === 0) {
        alert(`Count is now ${counter}`);
            }
        }
        document.addEventListener("DOMContentLoaded" , function () {
        document.querySelector("button").onclick = count;
        });
/*
        function setName() {
            const strinTitle = document.querySelector("h1");
            if (strinTitle.innerHTML == "Hello! Min bror") {
        strinTitle.innerHTML = " Hejda! min bror";
            }
            else {
        strinTitle.innerHTML = " Hello! Min bror";
            }
        }
        */
   