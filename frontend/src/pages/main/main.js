import "./main.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cookie from "js-cookie";
import axios from "axios";
import { VscLoading } from "react-icons/vsc";
import Navbar from "../navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Dashboard from '../dashboard/dashboard';

function Main() {
    const [isAuthed, setIsAuthed] = useState("checking");
    const [isValidatingAuth, setIsValidatingAuth] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [runOnes, setRunOnes] = useState(false);

    const navigate = useNavigate();
    const getLocation = useLocation();

    const validatingAuth = async () => {
        const cookieToken = cookie.get("JWT");
        if (cookieToken) {
            const response = await axios.post(
                "http://localhost:8090/api/v1/auth/jwt-verify",
                {
                    JWT: cookieToken,
                }
            );

            if (response.data["auth"] == true) {
                setIsAuthed(true);
                setIsValidatingAuth(false);
                cookie.set("username", response.data["username"]);
            }
        } else {
            setIsAuthed(false);
            setIsValidatingAuth(false);
            navigate("/login");
        }
    };
    if (isValidatingAuth == true) {
        setTimeout(() => {
            validatingAuth();
        }, 1200);
    }

    function documentLoaded() {

        setTimeout(() => {
            setIsLoading(false);
            console.log("done")
        }, 1200);
    }
    if (isValidatingAuth == false && isLoading == true) {
        documentLoaded()
    }






    return (
        <>
            {isValidatingAuth == true ? (
                <div className="mainLoading">
                    <VscLoading className="mainLoadingIcon" />
                    <h1>Login in</h1>
                </div>
            ) : (
                <></>
            )}
            {isValidatingAuth == false ? isLoading == true ? (
                <div className="mainLoading">
                    <VscLoading className="mainLoadingIcon" />
                    <h1>Loading</h1>
                </div>
            ) : (
                <></>
            ) : (<></>)}

            {isLoading == false ? (
                <>
                    <Navbar />
                    {getLocation.pathname === "/dashboard" && (
                        <>
                            <Dashboard />
                        </>
                    )}
                </>
            ) : (
                <></>
            )}
        </>
    );
}

export default Main;
