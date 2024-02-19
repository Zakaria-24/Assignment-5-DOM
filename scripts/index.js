let count = 0;
let currentSeats = 40;
const price =500;
const seats = document.querySelectorAll(".A");

// for (let index = 0; index < seats.length; index++) {
//     const A = seats[index];
//     A.addEventListener("click", function() {
//         console.log("boss");
//     });

// }
for (const A of seats) {
    A.addEventListener("click", function (e) {
        count += 1;
        setInnerText("count-seat", count);
       
        if (count > 4) {
            alert("You can't select more than four");
            document.getElementById("count-seat").innerText= 0;
        }


        // setInnerText("seats-left",currentSeats);
        const currentSeat = getTextElementValueById("seats-left");
        const updateSeatNumber = currentSeat - 1;
        setInnerText("seats-left",updateSeatNumber);
        if(updateSeatNumber=== 0){
            alert("Seat Unavailable");
            document.getElementById("seats-left").innerText = 0;
        }


        const seatNumber = event.target.innerText;
        const selectedDiv = document.getElementById("economy");

        const li = document.createElement("li");

        const p = document.createElement("p");
        p.innerText = seatNumber;

        const p1 = document.createElement("p");
        p1.innerText = "Economy";

        const p2 = document.createElement("p");
        p2.innerText = 500;

        li.appendChild(p);
        li.appendChild(p1);
        li.appendChild(p2);
        selectedDiv.appendChild(li);

        totalCost("total-price", price);
        grandTotalCost("grand-total", price);


        event.target.style.backgroundColor = "green";
        // event.target.setAttribute = ("disabled",true);
        
    });

}

// function
function setInnerText(id, value) {
    const countSeat = document.getElementById(id).innerText = value;
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId).innerText;
        const elementValue = parseInt(element);
        return elementValue;
}

function setBackgroundColorByClassName (elementClass){
const element = document.getElementsByClassName(elementClass);
element.classList.add('bg-blue-500');
}

function totalCost(id, value){
    const totalPrice = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalPrice);
    const total = convertedTotalCost + value;
    setInnerText("total-price", total);
}
function grandTotalCost(id, value){
    const totalPrice = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalPrice);
    const total = convertedTotalCost + value;
    setInnerText("grand-total", total);
}