import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const europeData = {
    labels: labels,
    datasets: [
        {
            label: "Profile Visit",
            backgroundColor: "#435ebe",
            borderColor: "#6610f2",
            data: [80, 0, 10, 5, 2, 20, 30, 45, 10, 50, 47, 22],
        },
    ],
};

const americaData = {
    labels: labels,
    datasets: [
        {
            label: "Profile Visit",
            backgroundColor: "#198754",
            borderColor: "#20c997",
            data: [80, 0, 10, 5, 11, 20, 30, 10, 10, 50, 50, 22],
        },
    ],
};

const asiaData = {
    labels: labels,
    datasets: [
        {
            label: "Profile Visit",
            backgroundColor: "#435ebe",
            borderColor: "#6610f2",
            data: [80, 0, 10, 5, 2, 20, 30, 45, 10, 50, 47, 22],
        },
    ],
};



const ProfileVisitRegion = () => {



    return (
        <div className="card" style={{marginTop:"11rem"}}>
            <div className="card-header">
                Profile Visit
            </div>

            <div className="card-body">
                <Line data={europeData}/>
                <Line data={americaData}/>
                <Line data={asiaData}/>
            </div>
        </div>
    )
}

export default ProfileVisitRegion;