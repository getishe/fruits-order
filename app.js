// const bovc = document.querySelectorAll('#p-but'); // Select all elements with id "p-but"

// for (let i = 0; i < bovc.length; i++) {
//   // Create a new button for each element
//   const newButton = document.createElement('button');
//   newButton.style.textTransform = 'uppercase';
//   newButton.style.fontSize = '10px';
//   newButton.style.marginTop = '12px';
//   newButton.textContent = 'Add to cart';

//   newButton.classList.add('btn');

//   // Append the new button to the current element in the loop
//   bovc[i].appendChild(newButton);

// }
// const bovc = document.querySelectorAll('#p-but'); // Select all elements with id "p-but"

// for (let i = 0; i < bovc.length; i++) {
//   // Remove any existing buttons before adding a new one
//   const existingButton = bovc[i].querySelector('button');  // Find the button inside the element
//   if (existingButton) {
//     existingButton.remove();  // Remove the existing button
//   }

//   // Create a new button for each element
//   const newButton = document.createElement('button');
//   newButton.textContent = 'Add to cart';
//   newButton.classList.add('btn');  // Use the CSS class for styling

//   // Append the new button to the current element
//   bovc[i].appendChild(newButton);
// }

// Price
// const p = document.createElement('p');
// p.textContent = '$' + boc[i].dataset.price;
// p.textContent = 'price $';
// p.textContent = 'price $';
// p.classList.add('price');
// p.style.color = '#7b7b7b';
// p.style.fontSize = '13px';
// p.style.marginTop = '8px';
// p.style.fontWeight = 'normal';
// p.style.textTransform = 'none';
// p. style.border = '1px solid black';

// p.innerHTML = '';
// button.remove();

// p.textContent = ''; // Clears the text content
// p.textContent = 'price $';
// p.textContent = 'price $';
// p.textContent = 'price $';
// boc[i].appendChild(p);

// const button = document.createElement('button');

// button.style.textTransform = 'uppercase';
// button.style.fontSize = '10px';
// button.style.marginTop = '12px';

// button.textContent = 'Add to cart';
// button.classList.add('btn');

// button.textContent = '';  // Clears the button text

// boc[i].append(button);
// button.remove();
// button.textContent = 'Add to cart';

const boc = document.querySelectorAll("#p-but");

for (let i = 0; i < boc.length; i++) {
  // Price
  const p = document.createElement("p");

  // Dynamically set the price if the dataset contains a price
  const price = boc[i].dataset.price
    ? "price: $" + boc[i].dataset.price
    : "Price not available";
  p.textContent = price;
  p.classList.add("price");
  p.style.color = "#7b7b7b";
  p.style.fontSize = "13px";
  p.style.marginTop = "8px";
  p.style.fontWeight = "normal";
  p.style.textTransform = "none";

  boc[i].appendChild(p);

  // const qu = document.querySelectorAll('#text-t1, #text-t2, #text-t3');

  // qu.forEach(q => {
  //   q.textContent = '';
  //   q.style.color = '#7b7b7b';
  // });
}

// const border = document.querySelectorAll('#text-t1, #text-t2, #text-t3');

// border.forEach(button => {
//   const p = document.createElement('p');
//   p.textContent = 'border';
//   button.style.color = '#7b7b7b';
//   p.style.fontSize = '12px';
//   p.style.marginTop = '8px';
//   p.style.fontWeight = 'normal';
//   p.style.textTransform = 'none';

//   // p.style.border = '1px solid black';
//   button.appendChild(p);

// });

// let count = 0;
// let count1= 0;
// let count2 = 0;
// // document.body.addEventListener('click', function(event) {
// //    if(event.target.matches('.btn')){
// //      count++;
// //      document.querySelector('#text-t1').textContent = "quantity: "+ count;
// //    }
// //   else if(event.target.matches('.btn1')){
// //      count1++;
// //      document.querySelector('#text-t2').textContent = "quantity: "+ count1;
// //   }
// //   else if(event.target.matches('.btn2')){
// //      count2++;
// //      document.querySelector('#text-t3').textContent = "quantity: "+ count2;
// //   }
// //   });

let count = 0;
let count1 = 0;
let count2 = 0;
const quantity = document.querySelectorAll("#text1, #text2, #text3");
quantity.forEach((q, index) => {
  const total = document.createElement("p");
  total.textContent = "";
  total.id = "tid" + (index + 1);
  total.classList.add("total");
  total.style.color = "#7b7b7b";
  total.style.fontSize = "13px";
  total.style.marginTop = "8px";
  total.style.fontWeight = "normal";
  total.style.textTransform = "none";
  q.appendChild(total);
});

const button = document.querySelectorAll(".btn");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function (event) {
    // Increase the count of the clicked button
    count++;
    // document.querySelector('#text1').textContent = "quantity: "+ count;
    const textElement = document.querySelector("#text1");
    textElement.textContent = "quantity: " + count;

    // change the font size of using text element
    textElement.style.fontSize = "13px";
    textElement.style.color = "#7b7b7b";
    textElement.style.marginTop = "8px";

    const total1Element = document.querySelector("#text-t1");
    total1Element.textContent = "total: $" + 4 * count;

    total1Element.style.fontSize = "13px";
    total1Element.style.color = "#7b7b7b";
    total1Element.style.marginTop = "8px";
    // Calculate the total price and display it

    //   const totalElement = document.querySelector('#tid1');
    //  // if(total > 0) {
    //   totalElement.textContent = '$' + (count * 10 + count1 * 15 + count2 * 20);
    //}
  });
}

const button1 = document.querySelectorAll(".btn1");

for (let i = 0; i < button1.length; i++) {
  button1[i].addEventListener("click", function (event) {
    // Increase the count of the clicked button
    count1++;
    // document.querySelector('#text2').textContent = "quantity: "+ count1;
    const textElement = document.querySelector("#text2");
    textElement.textContent = "quantity: " + count1;

    textElement.style.fontSize = "13px";
    textElement.style.color = "#7b7b7b";
    textElement.style.marginTop = "8px";

    // Calculate the total price and display it

    // Calculate the total price and display it
    const total2Element = document.querySelector("#text-t2");
    total2Element.textContent = "total : $" + 5 * count1;

    total2Element.style.fontSize = "13px";
    total2Element.style.color = "#7b7b7b";
    total2Element.style.marginTop = "8px";
    //  //if(total1 > 0) {
    //  totalElement1.textContent = '$' + (count * 10 + count1 * 15 + count2 * 20);
    // }
    //total1.textContent = '$' + (count * 10 + count1 * 15 + count2 * 20);
  });
}

const button2 = document.querySelectorAll(".btn2");

for (let i = 0; i < button2.length; i++) {
  button2[i].addEventListener("click", function (event) {
    // Increase the count of the clicked button
    count2++;
    //document.querySelector('#text3').textContent = "quantity: "+ count2;
    const textElement = document.querySelector("#text3");
    textElement.textContent = "quantity: " + count2;
    textElement.style.fontSize = "13px";
    textElement.style.color = "#7b7b7b";
    textElement.style.marginTop = "8px";

    const total3Element = document.querySelector("#text-t3");
    total3Element.textContent = "total :$" + 10 * count2;
    total3Element.style.fontSize = "13px";
    total3Element.style.color = "#7b7b7b";
    total3Element.style.marginTop = "8px";
  });
}

const pp = document.querySelectorAll("#text-1, #text-2, #text-3");
pp.forEach((p, index) => {
  const plus = document.createElement("button");
  plus.textContent = "+";
  plus.style.fontSize = "10px";
  plus.style.textAlign = "center";
  plus.style.border = "2px solid #ccc";
  plus.addEventListener("mouseover", () => {
    plus.style.backgroundColor = "#333";
    plus.style.cursor = "pointer";
  });
  plus.addEventListener("mouseout", () => {
    plus.style.backgroundColor = "";
    plus.style.cursor = "default";
  });
  plus.style.borderRadius = "5px";
  // plus.style.border = '1px solid red';
  // plus.style.height = '122px';
  plus.style.width = "25px";
  plus.style.height = "40px";
  plus.classList.add(`plus-${index + 1}`);
  // plus.style.marginRight = '8px';
  p.appendChild(plus);

  const minus = document.createElement("button");
  minus.textContent = "-";
  minus.style.fontSize = "10px";
  minus.style.textAlign = "center";
  // minus.style.border = "1px solid red";
  minus.addEventListener("mouseover", () => {
    minus.style.backgroundColor = "#333";
    minus.style.cursor = "pointer";
  });
  minus.addEventListener("mouseout", () => {
    minus.style.backgroundColor = "";
    minus.style.cursor = "default";
  });
  minus.style.border = "2px solid #ccc";
  minus.style.borderRadius = "5px";
  minus.style.height = "40px";
  minus.style.width = "25px";
  minus.classList.add(`minus-${index + 1}`);
  minus.style.textAlign = "center";
  p.appendChild(minus);

  const removeButton = document.createElement("button");
  // removeButton = 'Remove';
  removeButton.textContent = "Remove";
  removeButton.style.fontSize = "10px";
  removeButton.style.textAlign = "center";
  removeButton.classList.add(`remove-${index + 1}`);
  removeButton.style.border = "2px solid #ccc";
  removeButton.addEventListener("mouseover", () => {
    removeButton.style.backgroundColor = "#333";
    removeButton.style.cursor = "pointer";
  });
  removeButton.addEventListener("mouseout", () => {
    removeButton.style.backgroundColor = "";
    removeButton.style.cursor = "default";
  });
  removeButton.style.borderRadius = "5px";
  removeButton.style.textAlign = "center";
  // removeButton.style.border = "1px solid red";
  // removeButton.style.width = '80px';
  removeButton.style.height = "40px";
  removeButton.style.width = "65px";
  removeButton.style.textTransform = "uppercase";
  p.appendChild(removeButton);

  removeButton.addEventListener("click", function (event) {
    event.preventDefault();
    //  document.querySelectorAll('#text1, #text2, #text3');
    //  document.querySelectorAll('#text-t1, #text-t2, #text-t3');

    if (index === 0 && count > 0) {
      event.preventDefault();
      document.querySelector("#text1").textContent = "quantity: " + count;
      document.querySelector("#text-t1").textContent = "total: $" + 4 * count;
      remove(0);
    }
    if (index === 1 && count1 > 0) {
      event.preventDefault();
      document.querySelector("#text2").textContent = "quantity: " + count1;
      document.querySelector("#text-t2").textContent = "total: $" + 4 * count1;
      remove(1);
    }
    if (index === 2 && count2 > 0) {
      event.preventDefault();
      document.querySelector("#text3").textContent = "quantity: " + count2;
      document.querySelector("#text-t3").textContent = "total: $" + 4 * count2;
      remove(2);
    }
  });

  function remove() {
    if (index === 0) {
      count = 0;
      document.querySelector("#text1").textContent = "quantity: 0";
      document.querySelector("#text-t1").textContent = "total: $0";
    }
    if (index === 1) {
      count1 = 0;
      document.querySelector("#text2").textContent = "quantity: 0";
      document.querySelector("#text-t2").textContent = "total: $0";
    }
    if (index === 2) {
      count2 = 0;
      document.querySelector("#text3").textContent = "quantity: 0";
      document.querySelector("#text-t3").textContent = "total: $0";
    }
  }

  //  });
  //   const textElement = document.querySelector(`#text${index + 1}`);

  // Remove only the button that was clicked (i.e., remove removeButton)
  // removeButton.remove();
  // alert('remove button clicked');
  // document.querySelector(`.plus-${index + 1}`).remove();
  // document.querySelector(`.minus-${index + 1}`).remove();
  // document.querySelector(`.remove-${index + 1}`).remove();
  // document.querySelector(`#text-t${index + 1}`).remove();
  // document.querySelector(`#text${index + 1}`).remove();

  // const pElement = document.querySelector(`#text${index + 1}`);
  // pElement.remove();
  // const totalElement = document.querySelector(`#text-t${index + 1}`);
  // totalElement.remove();

  // const plusElement = document.querySelector(`.plus-${index + 1}`);
  // plusElement.remove();

  // const minusElement = document.querySelector(`.minus-${index + 1}`);
  // minusElement.remove();

  // const removeElement = document.querySelector(`.remove-${index + 1}`);

  // You could also add event listeners for the plus and minus buttons if needed

  plus.addEventListener("click", function (event) {
    //Increase the count of the clicked button

    // alert('plus clicked');
    if (index === 0 && count >= 1) {
      count++;
      document.querySelector("#text1").textContent = "quantity: " + count;
      document.querySelector("#text-t1").textContent = "total: $" + 4 * count;
    }
    if (index === 1 && count1 >= 1) {
      count1++;
      document.querySelector("#text2").textContent = "quantity: " + count1;
      document.querySelector("#text-t2").textContent = "total: $" + 5 * count1;
    }
    if (index === 2 && count2 >= 1) {
      count2++;
      document.querySelector("#text3").textContent = "quantity: " + count2;
      document.querySelector("#text-t3").textContent = "total: $" + 10 * count2;
    }
    // document.querySelector('#text1').textContent = "quantity: "+ count;
    // count++
    //   const textElement = document.querySelector('#text1');
    //   textElement.textContent = "quantity: "+ count;
    // }
  });

  minus.addEventListener("click", function () {
    // alert('minus clicked');
    if (index === 0 && count > 0) {
      count--;
      document.querySelector("#text1").textContent = "quantity: " + count;
      document.querySelector("#text-t1").textContent = "total: $" + 4 * count;
    }
    if (index === 1 && count1 > 0) {
      count1--;
      document.querySelector("#text2").textContent = "quantity: " + count1;
      document.querySelector("#text-t2").textContent = "total: $" + 5 * count1;
    }
    if (index === 2 && count2 > 0) {
      count2--;
      document.querySelector("#text3").textContent = "quantity: " + count2;
      document.querySelector("#text-t3").textContent = "total: $" + 10 * count2;
    }
  });

  const allButtons = document.querySelectorAll(
    '[class*="plus-"], [class*="minus-"], [class*="remove-"]'
  );
  allButtons.forEach((button) => {
    button.style.marginRight = "3px";
    button.style.padding = "8px";
    button.style.textAlign = "center";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const allButtons = document.querySelectorAll(
    ".btn,.btn1,.btn2,.plus-1,.plus-2,.plus-3,.minus-1,.minus-2,.minus-3,.remove-1,.remove-2,.remove-3"
  );
  const totalPriceElements = document.querySelectorAll(
    "#text-t1, #text-t2, #text-t3"
  );

  // Cash Received
  const user = document.querySelector("#btn-user");
  const useSome = document.querySelector("#input-sub");
  const submit = document.querySelector("#btn-sub");

  submit.addEventListener("click", function (event) {
    try {
      const totalDiv = document.querySelector(".tot");
      let currentPayment = Number(useSome.value.trim());
      const totalAmount = Number(
        totalDiv.textContent.replace(/[^0-9.-]+/g, "")
      );

      if (!totalAmount) {
        event.preventDefault();
        alert("Add chart");
        console.warn("No total amount found");
        useSome.focus();
        useSome.value = "";
        return;
      }
      // Validate input
      if (!currentPayment || isNaN(currentPayment) || currentPayment <= 0) {
        alert("Input cannot be empty. Please enter a valid amount");
        useSome.focus();
        useSome.value = "";
        return;
      }

      // Clear previous results
      const existingResult = user.querySelectorAll("p");
      existingResult.forEach((element) => element.remove());

      const pa = document.createElement("p");
      const Remaining = document.createElement("p");
      const Additional = document.createElement("p");
      // const Received = document.createElement("p");
      // Get running total of payments from data attribute or initialize it
      let totalPayments = Number(user.dataset.totalPayments || 0);
      totalPayments += currentPayment;
      user.dataset.totalPayments = totalPayments;

      pa.textContent = "Cash Received $" + totalPayments.toFixed(2);

      if (totalPayments < totalAmount) {
        // Still need more payment
        const remaining = totalAmount - totalPayments;

        Remaining.textContent = "Remaining Balance: $" + remaining.toFixed(2);
        Additional.textContent = "Please pay additional amount";
      } else {
        // Payment complete
        const change = totalPayments - totalAmount;
        Remaining.textContent =
          change > 0 ? "Change Due: $" + change.toFixed(2) : "Payment Complete";
        Additional.textContent = "Thank you for your purchase!";

        // Reset the payment tracking
        user.dataset.totalPayments = "0";
      }

      user.appendChild(pa);
      user.appendChild(Remaining);
      user.appendChild(Additional);

      // Clear input field
      useSome.value = "";
    } catch (error) {
      console.error("Error processing payment:", error);
      alert(
        "An error occurred while processing the payment. Please try again."
      );
    }
  });
  let sum = 0;
  allButtons.forEach((button) => {
    button.addEventListener("click", function () {
      sum = 0;
      totalPriceElements.forEach((element) => {
        const price =
          parseFloat(element.textContent.replace(/[^0-9.-]+/g, "")) || 0;
        sum += price;
      });
      useSome.focus();
      const content = document.querySelectorAll(".prop");

      let totalDiv = document.querySelector(".tot");
      if (!totalDiv) {
        totalDiv = document.createElement("p");
        totalDiv.classList.add("tot");
        content[2].appendChild(totalDiv);
      }
      totalDiv.textContent = "Cart Total:$" + sum;

      if (content.length <= 2) {
        console.error("Not enough .prop elements to display the total");
      }
    });
  });
});
