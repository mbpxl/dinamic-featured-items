const url = "../data/data.json";

async function getData(url) {
  console.log(url);
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error("Error. Details: ", error.message);
  }
}

document.addEventListener('DOMContentLoaded', async (e) => {
  const fetchedData = await getData(url);
  const blockContent = document.querySelector(".items");

  fetchedData.map(element => {
    blockContent.insertAdjacentHTML('beforeend',
      `
        <div class="items__cart cart">
          <img src=${element.img} alt="img" class="cart__img">
            <div class="cart__inner">
              <h4>${element.heading}</h4>
              <p>${element.title}</p>
              <p>$ ${element.price}</p>
            </div>
        </div>
      `
    )
  })
})