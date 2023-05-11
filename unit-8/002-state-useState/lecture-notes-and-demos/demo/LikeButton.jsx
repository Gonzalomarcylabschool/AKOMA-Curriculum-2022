const LikeButton = ({ count, setCount  }) => {
  const increment = () => setCount(count + 1);

  return (
    <>
      <button onClick={increment}>+</button>
    </>
  );
};

export default LikeButton;