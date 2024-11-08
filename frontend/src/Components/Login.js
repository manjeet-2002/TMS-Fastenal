import { useEffect, useState } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./mix.css";

const Login = () => {
    const [passShow, setPassShow] = useState(false);
    const [inpval, setInpval] = useState({
        email: "",
        password: "",
    });

    const [searchParam] = useSearchParams();
    const registrationDone = searchParam.get("reg");

    const history = useNavigate();

    const setVal = (e) => {
        // console.log(e.target.value);
        const { name, value } = e.target;

        setInpval(() => {
            return {
                ...inpval,
                [name]: value,
            };
        });
    };

    const loginuser = async (e) => {
        e.preventDefault();

        const { email, password } = inpval;

        if (email === "") {
            toast.error("Email is required!", {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error("password is required!", {
                position: "top-center",
            });
        } else {
            // console.log("user login succesfully done");

            const res = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await res.json();

            if (res.status === 200) {
                localStorage.setItem("uid", data.uid);
                localStorage.setItem("isAdmin", data.isAdmin);
                history("/");
                setInpval({ ...inpval, email: "", password: "" });
            } else if (res.status == 401) {
                toast.error("Incorrect Password . Try Again");
            }
        }
    };

    useEffect(() => {
        if (registrationDone === "true") {
            toast.success("Registration Successful", {
                position: "top-center",
            });
        }
    }, []);

    return (
        <>
            <section>
                <div className="form_data">
                    <div className="form_heading">
                        <h1>Welcome Back, Log In</h1>
                        <p>Hi, we are you glad you are back. Please login.</p>
                    </div>

                    <form>
                        <div className="form_input">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                value={inpval.email}
                                onChange={setVal}
                                name="email"
                                id="email"
                                placeholder="Enter Your Email Address"
                            />
                        </div>
                        <div className="form_input">
                            <label htmlFor="password">Password</label>
                            <div className="two">
                                <input
                                    type={!passShow ? "password" : "text"}
                                    onChange={setVal}
                                    value={inpval.password}
                                    name="password"
                                    id="password"
                                    placeholder="Enter Your password"
                                />
                                <div
                                    className="showpass"
                                    onClick={() => setPassShow(!passShow)}
                                >
                                    {!passShow ? "Show" : "Hide"}
                                </div>
                            </div>
                        </div>

                        <button className="btn" onClick={loginuser}>
                            Login
                        </button>
                        <p>
                            Don't have an Account?{" "}
                            <NavLink to="/register">Sign Up</NavLink>{" "}
                        </p>
                    </form>
                    <ToastContainer />
                </div>
            </section>
        </>
    );
};

export default Login;
