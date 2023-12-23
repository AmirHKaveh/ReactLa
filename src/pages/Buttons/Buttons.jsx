import BasicButton from "./BasicButton";
import OutlineButton from "./OutlineButton";
import IconButton from "./IconButton";

const Buttons = () => {
    return (
        <div id="main">
            <div className="page-heading">
                <div className="page-title">
                    <div className="row">
                        <div className="col-12 col-md-6 order-md-1 order-last">
                            <h3>Button</h3>
                            <p className="text-subtitle text-muted">
                                Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-12">
                    <BasicButton />

                </div>
                <div className="col-12 mt-5">
                    <OutlineButton />
                </div>

                <div className="col-12 mt-5">
                    <IconButton />
                </div>
            </div>
        </div>
    )
}

export default Buttons;