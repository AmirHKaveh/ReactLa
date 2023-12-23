import MuiAccordion from "../Accordions/MuiAccordion";
import BootstrapAccordion from "../Accordions/BootstrapAccordion";


export default function Accordions() {


    return (
        <div id="main">
            <div className="page-heading">
                <div className="page-title">
                    <div className="row">
                        <div className="col-12 col-md-6 order-md-1 order-last">
                            <h3>Accordion</h3>
                            <p className="text-subtitle text-muted">A pretty helpful component to show organized information to the user.</p>
                        </div>
                    </div>
                </div>1
            </div>

            <div className="row">
                <div className="col-12 col-md-6">
                    <MuiAccordion />

                </div>
                <div className="col-12 col-md-6">
                    <BootstrapAccordion />
                </div>
            </div>
        </div>
    );
}