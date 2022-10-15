import { Link, useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Welcome</h1>
            <Link to="/about/2">About</Link>
            <button onClick={() => navigate('/about/2')}>About button</button>
        </div>
    );
}

export default Welcome;
