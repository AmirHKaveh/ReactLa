import Chart from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import styles from './ProfileVisit.module.css'


const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const data = {
    labels: labels,
    datasets: [
        {
            label: "Profile Visit",
            backgroundColor: "rgb(67, 94, 190)",
            borderColor: "rgb(67, 94, 170)",
            data: [80,0, 10, 5, 2, 20, 30, 45,10,50,47,22],
        },
    ],
};

const ProfileVisit = () => {
    return (
        <div className={`"card mt-5"`}>
            <Bar data={data} />
        </div>
    )
}

export default ProfileVisit;