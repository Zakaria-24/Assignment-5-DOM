let count = 0;
let currentSeats = 40;
const price = 550;

const seats = document.querySelectorAll(".A");
for (const A of seats) {
    A.addEventListener("click", function (e) {
        count += 1;
        setInnerText("count-seat", count);


        const currentSeat = getTextElementValueById("seats-left");
        const updateSeatNumber = currentSeat - 1;
        setInnerText("seats-left", updateSeatNumber);
        if (updateSeatNumber === 0) {
            alert("Seat Unavailable");
            document.getElementById("seats-left").innerText = 0;

        } else if (count > 4) {

            alert("You can't select more than four");
            document.getElementById("count-seat").innerText = 0;

            element.disabled = false;

        }



        const seatNumber = event.target.innerText;
        const selectedDiv = document.getElementById("economy");

        const li = document.createElement("li");

        const p = document.createElement("p");
        p.innerText = seatNumber;

        const p1 = document.createElement("p");
        p1.innerText = "Economy";

        const p2 = document.createElement("p");
        p2.innerText = 550;

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


// Apply btn 
const applyBtn = document.getElementById("apply-btn");
applyBtn.addEventListener("click", function () {

    const coupon = document.getElementById("coupon-apply-input").value;
    const newCoupon = coupon.split(" ").join("").toUpperCase();


    if (newCoupon === "NEW15") {
        const grandTotal = parseInt(getTextElementValueById('grand-total'));

        const newDiscountAmount = price * 0.15;
        const newDiscountPrice = grandTotal - newDiscountAmount;

        setInnerText("grand-total", newDiscountPrice);
        document.getElementById("coupon-apply-input").value = "";

        event.target.parentNode.style.display = 'none';

    } else if (coupon === "Couple 20") {
        const grandTotal = parseInt(getTextElementValueById('grand-total'));
        const coupleDiscountAmount = price * 0.20;
        const coupleDiscountPrice = grandTotal - coupleDiscountAmount;

        setInnerText("grand-total", coupleDiscountPrice);
        document.getElementById("coupon-apply-input").value = "";

        event.target.parentNode.style.display = 'none';

    } else {
        alert("Coupon code is not valid! So, you will not get any discount..!");
        document.getElementById("coupon-apply-input").value = "";
    }


    const discountDiv = document.getElementById("discount");
    const li = document.createElement("li");

    const p = document.createElement("p");
    p.innerText = "Discount";

    const p2 = document.createElement("p")
    if (newCoupon === "NEW15") {
        p2.innerText = price * 0.15;
    } else if (coupon === "Couple 20") {
        p2.innerText = price * 0.2;
    }else{
        p2.innerText = 0;
    }


    li.appendChild(p);
    li.appendChild(p2)
    discountDiv.appendChild(li);

})



// function
function setInnerText(id, value) {
    const countSeat = document.getElementById(id).innerText = value;
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId).innerText;
    const elementValue = parseInt(element);
    return elementValue;
}

function setBackgroundColorByClassName(elementClass) {
    const element = document.getElementsByClassName(elementClass);
    element.classList.add('bg-blue-500');
}

function totalCost(id, value) {
    const totalPrice = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalPrice);
    const total = convertedTotalCost + value;
    setInnerText("total-price", total);
}
function grandTotalCost(id, value) {
    const totalPrice = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalPrice);
    const total = convertedTotalCost + value;
    setInnerText("grand-total", total);
}