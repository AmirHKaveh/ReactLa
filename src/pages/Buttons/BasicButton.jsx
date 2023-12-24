const BasicButton = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h4>Basic Buttons</h4>
            </div>

            <div className="card-body">
                <p className="text-muted">Use the <code>.btn .btn-color</code> classes.</p>
                <div className="buttons">
                    <a className="btn btn-primary">Primary</a>
                    <a className="btn btn-success">Success</a>
                    <a className="btn btn-info">Info</a>
                    <a className="btn btn-warning">Warning</a>
                    <a className="btn btn-danger">Danger</a>
                    <a className="btn btn-secondary">Secondary</a>
                    <a className="btn btn-default">Default</a>
                    <a className="btn btn-dark">Dark</a>
                </div>

                <hr />

                <p className="text-muted">Use the <code>.btn .rounded-pill</code> classes.</p>
                <div className="buttons">
                    <a className="btn btn-primary rounded-pill">Primary</a>
                    <a className="btn btn-success rounded-pill">Success</a>
                    <a className="btn btn-info rounded-pill">Info</a>
                    <a className="btn btn-warning rounded-pill">Warning</a>
                    <a className="btn btn-danger rounded-pill">Danger</a>
                    <a className="btn btn-secondary rounded-pill">Secondary</a>
                    <a className="btn btn-default rounded-pill">Default</a>
                    <a className="btn btn-dark rounded-pill">Dark</a>
                </div>
            </div>
        </div>
    )
}

export default BasicButton;