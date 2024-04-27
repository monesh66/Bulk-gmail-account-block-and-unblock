import './dashboard.css'



function Dashboard() {




    return (
        <div className="dashboard">
            <div className="topnav">
                <h1>Dashboard</h1>
            </div>
            <div className="mainContent">
                <div className="Mtop">
                    <div className="totalEmailActive">
                        <p className='activeEmailNu'>3,245</p>
                        <h1 className='title'>Total Number Of Active Gmail</h1>
                    </div>
                    <div className="totalEmailBlock">
                        <p className='blockEmailNu'>145</p>
                        <h1 className='title'>Total Number Of Blocked Gmail</h1>
                    </div>
                    <div className="totalEmail">
                        <p className='EmailNu'>3,390</p>
                        <h1 className='title'>Total Number Of Gmail Account</h1>
                    </div>
                </div>
                <div className="Mbottom">
                    <div className="currentProcesing">
                        <h1>Current Process</h1>
                        <div className="currentProcessDisplay">
                            <p>All Process Finished !. Nothing To Process</p>
                        </div>
                    </div>
                    <div className="currentProcesing">
                        <h1>Scheduled Task</h1>
                        <div className="currentProcessDisplay">
                            <p>Nothing Scheduled Yet...</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;