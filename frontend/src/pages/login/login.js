import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bitlogo from "../assets/img/bitlogo.png";
import { IoPerson } from "react-icons/io5";
import { FaKey } from "react-icons/fa";
import { VscLoading } from "react-icons/vsc";
import { IoClose } from "react-icons/io5";
import cookie from "js-cookie";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isFetching, setIsFetching] = useState(false);
    const [isLogined, setIsLogined] = useState(false);
    const [isAuthed, setIsAuthed] = useState("checking");
    const [isValidatingAuth, setIsValidatingAuth] = useState(true);

    const navigate = useNavigate();

    
    const validatingAuth= async () => {

        const cookieToken = cookie.get("JWT");
        if(cookieToken) {
            const response = await axios.post(
              "http://localhost:8090/api/v1/auth/jwt-verify",
              {
                JWT: cookieToken,
              }
            );

            if(response.data['auth'] == true) {
                setIsAuthed(true);
                setIsValidatingAuth(false);
                navigate("/dashboard")
            }
        } 
        else {
            setIsAuthed(false);
            setIsValidatingAuth(false);
        }
    }
    if (isValidatingAuth == true) {
        setTimeout(() => {
            validatingAuth()
        }, 500);
    }
    
    const validate =  async() => {
        const data = {
            username: username,
            password: password,
        };
        try {
            const response = await axios.post(
                "http://localhost:8090/api/v1/auth/login",
                {
                    username: username,
                    password: password,
                },{
                    withCredentials: true
                }
            );

            if (response.data["code"] == 0) {
                setTimeout(() => {
                    setIsFetching(false);
                    handlePopupOpen(0)
                }, 1500);
            } 
            else if (response.data["code"] == 1) {
                setTimeout(() => {
                    handlePopupClose()
                    setIsFetching("logined");
                    setIsLogined(true);
                }, 1500);
            }
        } catch (error) {
            console.log("Error while fetch");
            console.log(error);
            if (error["code"] == "ERR_NETWORK") {
                handlePopupOpen(2)
                setIsFetching(false)
            }
            else {
                handlePopupOpen(3)
                setIsFetching(false)
            }
        }
    };

    function handleSubmit() {
        setIsFetching(true);
        validate();
        setTimeout(() => {
            if (isFetching == true) {
                setIsFetching(false);
                showpopup();
            } else {
                
            }
        }, 5000);

        function showpopup() {
            setTimeout(() => {
                handlePopupOpen(1);
            }, 100);
        }
    }

    const redirectInjector = setInterval(() => {
        if (isLogined == true) {
            clearInterval(redirectInjector);
            const h1 = document.getElementById("secondcount");
            var timer = 3;

            const timeScript = setInterval(() => {
                if (timer <= -2) {
                    clearInterval(timeScript);
                }
                else if(timer == -1) {
                    timer = timer - 1;
                    document.getElementById("redirectmsg").innerText = "Redirecting...";
                    setTimeout(() => {
                        navigate("/dashboard");
                    }, 1000);
                }
                else {
                    h1.innerText = timer;
                    timer = timer - 1;
                }
            }, 1000);
        }
    }, 500);
    
    

    function handlePopupClose() {
        const popup = document.getElementById("popup");
        if (popup.className.split(" ")[1] == "show") {
            popup.classList.remove("show");
            popup.classList.add("hide");
        }
    }
    function handlePopupOpen(option) {
        const msg = ["Username or Password is Worng", "Internet Connection is slow", "Server is down, please contact developer", "Something Went Wrong, please contact developer of the website."];
        const popup = document.getElementById("popup");
        
        if (popup.className.split(" ")[1] == "hide") {
            popup.classList.remove("hide");
            popup.classList.add("show");
        }

        const popupMSG = document.getElementById("popupmsg");
        popupMSG.innerText = msg[option];

        // const username = document.getElementById("username");
        // console.log(username)
        // username.style.border = "solid 2px red";

        // const password = document.getElementById("password");
        // password.style.border = "solid 2px red";
    }


    return (
        <>
        {isValidatingAuth == true ? (
            <div className="mainLoading">
                <VscLoading className="mainLoadingIcon" />
                <h1>Loading</h1>
            </div>
        ) : (
        <div className="login">
            <div id="popup" className="popup hide">
                <h1 id="popupmsg" className="ppmsg"></h1>
                <IoClose id="popupClose" className="popupClose" onClick={handlePopupClose}/>
            </div>
            <div className="loginbox">
                <h1 className="boxtitle">ADMIN - LOGIN</h1>
                <img className="logobox" src={bitlogo} alt="BIT LOGO" />
                {isFetching != true ? (
                    <></>
                ) : (
                    <div className="loading">
                        <VscLoading className="loadingicon" />
                    </div>
                )}
                {isFetching != false ? (
                    <></>
                ) : (
                    <div className="userinput" id="userinput">
                        <div className="usernamebox">
                            <IoPerson className="personicon" />
                            <input
                                id="username"
                                className="username"
                                type="text"
                                placeholder="Username"
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                            />
                        </div>
                        <div className="passwordbox">
                            <FaKey className="passicon" />
                            <input
                                className="password"
                                type="password"
                                placeholder="Password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                id="password"
                            />
                        </div>
                    </div>
                )}
                {isLogined != true ? (
                    <></>
                ) : (
                    <div className="loginsuccess">
                        <div className="successmsg">
                            <h1>Successfully Loged-in</h1>
                        </div>
                    </div>
                )}
                {isLogined != false ? (
                    <div className="redirect">
                        <h1 className="redirectmsg" id="redirectmsg">Redirecting in <span id="secondcount">4</span>S...</h1>
                    </div>
                ) : (
                    <button className="submit" onClick={handleSubmit}>
                        Login
                    </button>
                )} 
                
            </div>
        </div>)}
        </>
    );
}

export default Login;
