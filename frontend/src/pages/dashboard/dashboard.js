import './dashboard.css'
import { useState } from 'react'



function Dashboard() {

    const [isContentLoadedu, setIsContentLoadedu] = useState(false);
    const [runOnes, setRunOnes] = useState(false)
    var isContentLoaded = isContentLoadedu

    function setIsContentLoaded(value) {
        isContentLoaded = value;
        setIsContentLoadedu(true);
    }


    function loadContent() {
        if (isContentLoaded === false) {
            setTimeout(() => {
                setIsContentLoaded(true);
            }, 3000)
        }
    }

    function animateLoading() {
        var interval = 4;
        var timeLine = 0;
        var frameFront = 0;
        var frameMain = 0;
        var frameBack = 0;
        console.log("started animation...")
        const animate = setInterval(() => {
            console.log(isContentLoaded)
            if (isContentLoaded == true) {
                clearInterval(animate)
            }
            const animatedDiv = document.querySelectorAll(".contentLoadingAnimation");
            if (animatedDiv) {
                timeLine = timeLine + interval;
                if (timeLine >= 300) {
                    timeLine = -50;
                    if (interval == 4) {
                        interval = 7
                    }
                    if (interval == 7) {
                        interval = 4
                    }
                }
                frameMain = timeLine;
                frameFront = timeLine - 40;
                frameBack = timeLine + 20;
                animatedDiv.forEach((ele) => {
                    ele.style.background = "linear-gradient(110deg, rgba(210,210,210,0.5) 0%, rgba(210,210,210,0.5) " + frameFront + "%, rgba(150,150,150,1) " + frameMain + "%, rgba(210,210,210,0.5) " + frameBack + "%, rgba(210,210,210,0.5) 100%)";
                })
            }

        }, 16);

    }


    if (runOnes === false) {
        setRunOnes(true);
        animateLoading();
        loadContent();
    }



    return (
        <div className="dashboard">
            <div className="topnav">
                <h1>Dashboard</h1>
            </div>
            <div className="mainContent">
                <div className="Mtop">
                    <div className="totalEmailActive">
                        {isContentLoaded && (
                            <>
                                <p className='activeEmailNu'>3,245</p>
                                <h1 className='title'>Total Number Of Active Gmail</h1>
                            </>
                        )}
                        {!isContentLoadedu && (
                            <>
                                <div className="contentLoadingAnimation c1"></div>
                                <div className="contentLoadingAnimation c2"></div>
                            </>
                        )}

                    </div>
                    <div className="totalEmailBlock">
                        {isContentLoadedu && (
                            <>
                                <p className='blockEmailNu'>145</p>
                                <h1 className='title'>Total Number Of Blocked Gmail</h1>
                            </>
                        )}
                        {!isContentLoadedu && (
                            <>
                                <div className="contentLoadingAnimation c1"></div>
                                <div className="contentLoadingAnimation c2"></div>
                            </>
                        )}

                    </div>
                    <div className="totalEmail">
                        {isContentLoadedu && (
                            <>
                                <p className='EmailNu'>3,390</p>
                                <h1 className='title'>Total Number Of Gmail Account</h1>
                            </>
                        )}
                        {!isContentLoadedu && (
                            <>
                                <div className="contentLoadingAnimation c1"></div>
                                <div className="contentLoadingAnimation c2"></div>
                            </>
                        )}

                    </div>
                </div>
                <div className="Mbottom">
                    <div className="currentProcesing">
                        <div className="header">
                            <h1>Current Process</h1>
                            <div className="viewButton"><p>View</p></div>
                        </div>

                        <div className="currentProcessDisplay">
                            {isContentLoaded && (
                                <>
                                    <p>All Process Finished !. Nothing To Process</p>
                                </>
                            )}
                            {!isContentLoaded && (
                                <>
                                    <div className="contentLoadingAnimation c3 t1">
                                        <div className="loadingIcon"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBoxSmall"></div>
                                    </div>
                                    <div className="contentLoadingAnimation c4 t1">
                                        <div className="loadingIcon"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBoxSmall"></div>
                                    </div>
                                    <div className="contentLoadingAnimation c5 t1">
                                        <div className="loadingIcon"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBoxSmall"></div>
                                    </div>
                                    <div className="contentLoadingAnimation c6 t1">
                                        <div className="loadingIcon"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBoxSmall"></div>
                                    </div>
                                    <div className="contentLoadingAnimation c7 t1">
                                        <div className="loadingIcon"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBoxSmall"></div>
                                    </div>
                                    <div className="contentLoadingAnimation c8 t1">
                                        <div className="loadingIcon"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBoxSmall"></div>
                                    </div>
                                    <div className="contentLoadingAnimation c9 t1">
                                        <div className="loadingIcon"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBoxSmall"></div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="currentProcesing">
                        <div className="header">
                            <h1>Scheduled Task</h1>
                            <div className="viewButton"><p>View</p></div>
                        </div>

                        <div className="currentProcessDisplay">
                            {isContentLoaded && (
                                <>
                                    <p>Nothing Scheduled Yet...</p>
                                </>
                            )}
                            {!isContentLoaded && (
                                <>
                                    <div className="contentLoadingAnimation c3 t1">
                                        <div className="loadingIcon"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBoxSmall"></div>
                                    </div>
                                    <div className="contentLoadingAnimation c4 t1">
                                        <div className="loadingIcon"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBoxSmall"></div>
                                    </div>
                                    <div className="contentLoadingAnimation c5 t1">
                                        <div className="loadingIcon"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBoxSmall"></div>
                                    </div>
                                    <div className="contentLoadingAnimation c6 t1">
                                        <div className="loadingIcon"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBoxSmall"></div>
                                    </div>
                                    <div className="contentLoadingAnimation c7 t1">
                                        <div className="loadingIcon"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBoxSmall"></div>
                                    </div>
                                    <div className="contentLoadingAnimation c8 t1">
                                        <div className="loadingIcon"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBoxSmall"></div>
                                    </div>
                                    <div className="contentLoadingAnimation c9 t1">
                                        <div className="loadingIcon"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBox"></div>
                                        <div className="loadingBoxSmall"></div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;