const NameHeader = (props) => {
  const { name, age } = props;
  console.log(props);
  return (
    <h1>Hello! My name is {name} and I'm {age}</h1>
  )
}

export default NameHeader;