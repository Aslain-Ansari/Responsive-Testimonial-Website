(function () {
  const customerImage = document.querySelector("#customer-img");
  const customerName = document.querySelector("#customer-name");
  const customerText = document.querySelector("#customer-text");
  const btn = document.querySelectorAll(".btn");

  let index = 0;
  const customers = [];

  function Customer(img, name, text) {
    this.img = img;
    this.name = name;
    this.text = text;
    console.log(this);
  }

  function createCustomer(img, name, text) {
    let Img = `./image/${img}.jpg`;
    let customer = new Customer(Img, name, text);
    customers.push(customer);
  }

  createCustomer(
    0,
    "John",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit. Quod nemo eius commodi nesciunt facere maxime nulla in debitis esse eaque."
  );
  createCustomer(
    1,
    "Alice",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nemo eius m dolor sit amet consectetur adipisicing elit commodi nesciunt facere maxime nulla in debitis esse eaque."
  );
  createCustomer(
    2,
    "Pamela",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nemo eius commodi nesciunt facere maxime nulla in debitis esse eaque."
  );
  createCustomer(
    3,
    "Andrew",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nemo eius commodi nesciunt facere maxime nulla in debitis esse eaque."
  );
  createCustomer(
    4,
    "Bashir",
    "Lorem ipsum dolor sit amet adipisicing elit. Quod nemo eius nesciunt facere maxime nulla in debitis esse eaque."
  );
  createCustomer(
    5,
    "Claus",
    "Lorem ipsum adipisicing elit. Quod nemo eius nulla in debitis esse eaque."
  );
  createCustomer(
    6,
    "Stacy",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nemo eius commodi nesciunt facere maxime nulla in debitis esse eaque."
  );
  createCustomer(
    7,
    "Lee",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nemo eius commodi nesciunt facere maxime nulla in debitis esse eaque.sit amet consectetur adipisicing elit."
  );

  btn.forEach(function (button) {
    button.addEventListener("click", function (e) {
      if (e.target.parentElement.classList.contains("prevBtn")) {
        if (index === 0) {
          index = customers.length;
        }
        index--;
        customerImage.src = customers[index].img;
        customerName.textContent = customers[index].name;
        customerText.textContent = customers[index].text;
      }

      if (e.target.parentElement.classList.contains("nextBtn")) {
        index++;
        if (index === customers.length) {
          index = 0;
        }
        customerImage.src = customers[index].img;
        customerName.textContent = customers[index].name;
        customerText.textContent = customers[index].text;
      }
    });
  });
})();
