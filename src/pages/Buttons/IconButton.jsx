export default function IconButton() {
    return (
        <div className="card">
            <div className="card-header">
                <h4>Buttons With Icon</h4>
            </div>

            <div className="card-body">
                <p class="text-muted">Use the <code>.icon</code> and <code>.icon-left</code> classes.</p>
                <div className="buttons">
                    <a className="btn btn-primary">Primary <i className="fa fa-user" /></a>
                    <a className="btn btn-success">Success <i className="fa fa-check" /></a>
                    <a className="btn btn-info">Info <i className="fa fa-info" /></a>
                    <a className="btn btn-warning">Warning <i className="fa fa-warning" /></a>
                    <a className="btn btn-danger">Danger <i className="fa fa-info-circle" /></a>
                    <a className="btn btn-secondary">Secondary <i className="fa fa-person" /></a>
                    <a className="btn btn-default">Default <i className="fa fa-user" /></a>
                    <a className="btn btn-dark">Dark <i className="fa fa-file" /></a>
                </div>
            </div>
        </div>
    )
}