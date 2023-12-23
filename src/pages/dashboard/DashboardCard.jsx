import styles from "./DashboardCard.module.css"

const DashaboardCard = () => {
    return (
        <div className="row">
            <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                    <div className="card-body px-4 py-4-5">
                        <div className="row">
                            <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                                <div className="stats-icon purple mb-2">
                                    <i className="fas fa-eye"></i>
                                </div>
                            </div>
                            <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                                <h6 className="text-muted font-semibold">Views</h6>
                                <h6 className="font-extrabold mb-0">2120</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                    <div className="card-body px-4 py-4-5">
                        <div className="row">
                            <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                                <div className="stats-icon blue mb-2">
                                    <i className="fas fa-user"></i>
                                </div>
                            </div>
                            <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                                <h6 className="text-muted font-semibold">Followers</h6>
                                <h6 className="font-extrabold mb-0">1830</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                    <div className="card-body px-4 py-4-5">
                        <div className="row">
                            <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                                <div className="stats-icon green mb-2">
                                    <i className="fas fa-user-plus"></i>
                                </div>
                            </div>
                            <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                                <h6 className="text-muted font-semibold">Following</h6>
                                <h6 className="font-extrabold mb-0">800</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6 col-lg-3 col-md-6">
                <div className="card">
                    <div className="card-body px-4 py-4-5">
                        <div className="row">
                            <div className="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start ">
                                <div className="stats-icon red mb-2">
                                    <i className="fas fa-bookmark"></i>
                                </div>
                            </div>
                            <div className="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                                <h6 className="text-muted font-semibold">Saved</h6>
                                <h6 className="font-extrabold mb-0">50</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DashaboardCard;