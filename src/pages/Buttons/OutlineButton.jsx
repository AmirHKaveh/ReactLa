export default function OutlineButton() {
    return (
        <div className="card">
            <div className="card-header">
                <h4>Outline Buttons</h4>
            </div>

            <div className="card-body">
                <p class="text-muted">Use the <code>.btn .btn-outline-color</code> classes.</p>
                <div className="buttons">
                    <a className="btn btn-outline-primary">Primary</a>
                    <a className="btn btn-outline-success">Success</a>
                    <a className="btn btn-outline-info">Info</a>
                    <a className="btn btn-outline-warning">Warning</a>
                    <a className="btn btn-outline-danger">Danger</a>
                    <a className="btn btn-outline-secondary">Secondary</a>
                    <a className="btn btn-outline-default">Default</a>
                    <a className="btn btn-outline-dark">Dark</a>
                </div>
            </div>
        </div>
    )
}