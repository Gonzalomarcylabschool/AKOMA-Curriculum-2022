const main = async () => {
  // because this page is hosted on our server, we don't need to specify the full URL
  const url = '/fellows';
  const fellowsUl = document.querySelector('#fellows');

  const fellows = await fetch(url).then((r) => r.json()).catch(() => []);
  fellows.forEach(({ name }) => {
    fellowsUl.insertAdjacentHTML('afterBegin', `<li>${name}</li>`);
  });
};

main();
