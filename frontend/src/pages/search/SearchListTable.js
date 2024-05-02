import React from 'react';
import { IoMdEye } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

function SearchListTable({ id, profile, color, gmail, name, rollNumber, accountStatus }) {
    const navigate = useNavigate();

    return (
        <div className="tr">
            <div className="tdId">
                <p>{id}</p>
            </div>
            <div className="tdProfile">
                <p className='tableProfileIcon' style={{ backgroundColor: color }}>{profile}</p>
            </div>
            <div className="tdGmail">
                <p>{gmail}</p>
            </div>
            <div className="tdName">
                <p>{name}</p>
            </div>
            <div className="tdRollNumber">
                <p>{rollNumber}</p>
            </div>
            <div className="tdAccountStatus">
                {accountStatus === "Active" ? (
                    <p className='tableStatus' style={{backgroundColor: "rgb(0, 236, 0)"}}>{accountStatus}</p>
                ) : (
                    <p className='tableStatus' style={{backgroundColor: "rgb(255, 50, 50)"}}>{accountStatus}</p>
                )}

            </div>
            <div className="tdView">
                <p onClick={() => { navigate("/search/account/" + id) }}><IoMdEye className='eyeIcon' /></p>
            </div>
        </div>
    );
}

export default SearchListTable;
