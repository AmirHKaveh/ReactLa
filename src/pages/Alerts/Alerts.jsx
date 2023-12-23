import Light from "./Light";
import Solid from "./Solid";
import MaterialUI from "./MaterialUI";


const Alerts = () => {
    return (
        <div id="main">
            <div className="page-heading">
                <div className="page-title">
                    <div className="row">
                        <div className="col-12 col-md-6 order-md-1 order-last">
                            <h3>Alerts</h3>
                            <p className="text-subtitle text-muted">A pretty helpful component to show emphasized information to the user.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-12 col-md-6">
                    <Light />
                </div>
                <div className="col-12 col-md-6">
                    <Solid />
                </div>

                <div className="col-12 mt-4">
                    <MaterialUI />
                </div>
            </div>
        </div>
    )
}

export default Alerts;