import MyContext from "../Context/MyContext";

function ComponentB() {
  return (
    <MyContext.Consumer>
      {(data) => <div>{data}</div>}
    </MyContext.Consumer>
  );
}

export default ComponentB;