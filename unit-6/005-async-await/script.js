const body = document.body;
let data;
async function fetchData() {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=84&lon=-74&units=imperial&appid=b989a956b784b1493fe08339165f3739');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData()

let humidityText = document.querySelector('#humidityText');
humidityText.innerText = data;