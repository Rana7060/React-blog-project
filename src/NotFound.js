import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry!</h2>
      <p>This Page Cannot Be Found</p>
      <Link to="/">Back To Home</Link>
    </div>
  );
};

export default NotFound;
