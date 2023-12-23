import { Component } from "react";
import {Pie} from "react-chartjs-2"

const VisitorProfile=()=>{
    const labels=["Man","Woman"];
    const data = {
        labels: labels,
        datasets: [
          {
            label: "Visitor Profile",
            backgroundColor: [
                'rgb(67, 94, 190)',
                'rgb(85, 198, 232)'
              ],
              borderColor: [
                'rgb(67, 94, 190)',
                'rgb(85, 198, 232)'
              ],
            data: [60,40],
            
          },
        ],
      };

    return (
        <div className="card">
            <div className="card-header">Visitor Profile</div>
            <div className="card-body">
                 <Pie data={data} />
            </div>
      </div>
    )
}

export default VisitorProfile;
// class VisitorProfile extends Component {
//     const labels=["Man","Woman"]

//     render() {
//         return (
            
//         )
//     }
// }