import DashboardCard from './DashboardCard'
import ProfileVisit from './ProfileVisit'
import LatestComments from './LatestComment'
import VisitorProfile from './VisitorProfile'
import ProfileVisitRegion from './ProfileVisitRegion'



const Dashboard = () => {

    return (
        <div id="main">
            <div className="page-heading">
                <h3>Profile Statistics</h3>
            </div>

            <div className="row">
                <div className="col-12 col-lg-9">
                    <DashboardCard />
                    <ProfileVisit />
                    <LatestComments />
                </div>
                <div className="col-12 col-lg-3">
                    <VisitorProfile />
                    <ProfileVisitRegion />
                </div>
            </div>
        </div>
    )
}

export default Dashboard