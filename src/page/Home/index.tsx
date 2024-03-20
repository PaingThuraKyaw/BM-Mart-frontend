import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to={"/seller"}>Go to seller</Link>
    </>
  );
};

export default Home;
