import NameHeader from "./NameHeader";
import InstagramPost from "./InstagramPosts";
const App = () => {
  return (
    <>
      <InstagramPost />
      <NameHeader name="Gonzalo" age='2' />
      <NameHeader name="Laura" age='15'/>
      <NameHeader name="Zo" age='10'/>
    </>
    
  )
}

export default App;