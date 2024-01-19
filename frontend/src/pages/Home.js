import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/register">register</Link>
                    </li>
                    <li>
                        <Link to="/login">login</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">dashboard</Link>
                    </li>
                </ul>
            </nav>
            {
            /* not sure why we are using outlet here???
            works fine without even using outlet
            */}
            <Outlet />
        </>
    );
};

export default Home;
