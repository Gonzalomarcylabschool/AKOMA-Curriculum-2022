// debugger;
// let a = 1;

// for (let i = 0; i< 5; i++ ){
//   console.log('wait')
// }

// console.log(a);
// fetch ('https://reqres.in/api/users')
// .then(res => res.json())
// .then(data => {
//   console.log(data)
// })
// .catch(error);
const body = document.body;
async function getData() {
  try {
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();

    console.log(`Email: ${data.data[0].email}, Name: ${data.data[0].first_name}`);
    let text = document.createElement('p');
    text.innerText = `Email: ${data.data[0].email}, Name: ${data.data[0].first_name}`;
    body.appendChild(text);
  } catch (error) {
    console.error(error);
  }
}

getData();

// const getData2 = async () => {
//   try {
//     const response = await fetch('https://reqres.in/api/users');
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getData2(0)

// async function fetchData(url) {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(`Error fetching JSON: ${error.message}`);
//   }
// }
