import Carousel from "../components/Carousel";

export default function HomePage() {
  const centerTextStyle = {
    textAlign: 'center',
  };

  return <div style={centerTextStyle}>
    <h1>Welcome to MyBook</h1>
    <Carousel />
    <h2>Discover, Share, and Discuss Your Reading Journey</h2>
    <p>Our mission is to create a vibrant community where book lovers come together  </p>
    <p>to share their reading experiences, ignite meaningful conversations, </p>
    <p>and inspire each others literary journeys. </p>

  </div>;
}
