const catName = "Tom";
const catPicUrl = "./img/cat-pic.jpg";
const mathThing = 1+3;

const arr = [1, 2, 3, 4, 5];
const sum = () => {
  return arr.reduce((a,b)=>a+b);
}

const someVal = sum();

const InstagramPost = () => {
  return (
    <div>
      <img alt="cat pic" src='./img/cat-pic.jpg' />
      <p>Check out my cute cat named {catName}!</p>
      <p>{someVal}</p>
    </div>
  );
};

export default InstagramPost;