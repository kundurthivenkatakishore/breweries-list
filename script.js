//Build an html elements Header part
document.body.innerHTML = `<div class="heading-container">
<h1>Breweries List</h1>
<img src="https://static.thenounproject.com/png/1976045-200.png" alt="brew" class="icon" width="50px" height="50px" />
</div>
<div id="mainContainer" class="main-container"></div>`;

const getData = async () => {
  try {
    const data = await fetch("https://api.openbrewerydb.org/breweries");
    const breweries = await data.json();
    mainContainer.innerHTML = "";
    breweries.forEach((brewery) => {
      displayData(brewery);
    });
  } catch (error) {
    console.log(error);
  }
};

getData();
const displayData = (obj) => {
  mainContainer.innerHTML += `
  <div class="container">
  <h3>Breweries Name:${obj.name}</h3>
  <p>Breweries Type:${obj.brewery_type}</p>
  <p>Breweries Street:${obj.street}</p>
  <p>Breweries City:${obj.city}</p>
  <p>Breweries State:${obj.state}</p>
  <p>Breweries Phone:${obj.phone}</p>
  <p>Breweries Website:${obj.website_url}</p>
  <p>Breweries Country:${obj.country}</p>
  </div>
  `;
};