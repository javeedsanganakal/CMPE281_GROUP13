import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Profile from "./profile/Profile";
import FarmerOne from "./profile/farmer/One";
import FarmerTwo from "./profile/farmer/Two";
import FarmerThree from "./profile/farmer/Three";
import FarmerFour from "./profile/farmer/Four";
import FarmerFive from "./profile/farmer/Five";
import FarmerSix from "./profile/farmer/Six";
import FarmerSeven from "./profile/farmer/Seven";
import PilotOne from "./profile/pilot/One";
import PilotTwo from "./profile/pilot/Two";
import PilotThree from "./profile/pilot/Three";
import PilotFour from "./profile/pilot/Four";
import FarmOne from "./profile/farm/One";
import FarmTwo from "./profile/farm/Two";
import FarmThree from "./profile/farm/Three";
import Farm from "./profile/Farm";
import Farmer from "./profile/Farmer";
import Pilot from "./profile/Pilot";
import Farmland from "./profile/Farmland";
import MyBookings from "./dashboard/farmer/MyBookings";
import ServiceRequest from "./dashboard/farmer/ServiceRequest";
import FarmerManagement from "./dashboard/farmer/FarmerManagement";
import DroneManagement from "./dashboard/drone/DroneManagement";
import PilotManagement from "./dashboard/pilot/PilotManagement";
import FarmManagement from "./dashboard/farm/FarmManagement";
import Maintenance from "./dashboard/farmer/Maintenance";
import BookDroneServiceOne from "./dashboard/farmer/BookDroneServiceOne";
import BookDroneServiceTwo from "./dashboard/farmer/BookDroneServiceTwo";
import BookDroneServiceThree from "./dashboard/farmer/BookDroneServiceThree";
import DroneSimulation from "./dashboard/farmer/DroneSimulation";
import CreateSimulationDrone from "./dashboard/farmer/simulation/DroneSimulation/CreateSimulationDrone.js";
import SimulationHomePage from "./dashboard/farmer/simulation/simulationHomePage";
import CreateDronePage from "./dashboard/farmer/simulation/createDronePage/index";
import PilotDashboard from "./dashboard/pilot/PilotDashboard";
import DroneOne from "./profile/drone/One";
import AdminAccess from "./common/adminaccess/AdminAccess";
import ScheduleOne from "./dashboard/pilot/ScheduleOne";
import ScheduleTwo from "./dashboard/pilot/ScheduleTwo";
import ScheduleThree from "./dashboard/pilot/ScheduleThree";
import FarmSelect from "./profile/farm/FarmSelect";
import FarmPlotting from "./profile/farm/FarmPlotting";
import CouldDashboardMap from "./dashboard/CouldDashboardMap";
import DroneCatalog from "./dashboard/DroneCatalog";
import DroneCloudTracking from "./dashboard/DroneCloudTracking";
import PilotSchedule from "./dashboard/pilot/pilotSchedule"
import TimesPerDay from "./dashboard/pilot/timesPerDay"
// import CloudDashboardHome from "./dashboard/cloudDashboardHome/cloudDashBoard"
import DroneFleetStatistics from "./dashboard/DroonFleetStatic/DroonFleetStatic"
// import ServiceHistory from "./dashboard/service/App"
import FarmerMain from "./dashboard/FarmerMaintence/Farmermain"
import Map from "./profile/farm/map/Map";

import CloudDashboardHome from './admin/CloudDashboardHome/index';
import DroneAIModels from './admin/droneAIModelEvaluation/droneAIModelEvaluation';
import DroneData from './admin/DroneData/index';
import Statistics from './admin/DronFleetStatistic/droneFleetStatistics';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth">
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/profile">
          <Route path="" element={<Profile />} />
          <Route path="farmer/1" element={<FarmerOne />} />
          <Route path="farmer/2" element={<FarmerTwo />} />
          <Route path="farmer/3" element={<FarmerThree />} />
          <Route path="farmer/4" element={<FarmerFour />} />
          <Route path="farmer/5" element={<FarmerFive />} />
          <Route path="farmer/6" element={<FarmerSix />} />
          <Route path="farmer/7" element={<FarmerSeven />} />
          <Route path="pilot/1" element={<PilotOne />} />
          <Route path="pilot/2" element={<PilotTwo />} />
          <Route path="pilot/3" element={<PilotThree />} />
          <Route path="pilot/4" element={<PilotFour />} />
          <Route path="farm/1" element={<FarmOne />} />
          <Route path="farm/plotting" element={<Map isConnected/>} />
          <Route path="farm/2" element={<FarmTwo />} />
          <Route path="farm/3" element={<FarmThree />} />
          <Route path="farm/4" element={<FarmSelect />} />
          <Route path="drone/1" element={<DroneOne />} />

          <Route path="farmer" element={<Farmer />} />
          <Route path="pilot" element={<Pilot />} />
          <Route path="farm" element={<Farm />} />
          <Route path="farmland" element={<Farmland />} />
        </Route>

        <Route path="/dashboard">
          <Route path="farmer/myBookings" element={<MyBookings />} />
          <Route
            path="farmer/bookDroneServiceOne"
            element={<BookDroneServiceOne />}
          />
          <Route path="pilot/myBookings" element={<MyBookings />} />
          <Route
            path="farmer/bookDroneServiceTwo/:id"
            element={<BookDroneServiceTwo />}
          />
          <Route
            path="farmer/bookDroneServiceThree/:id"
            element={<BookDroneServiceThree />}
          />
          <Route path="farmer/serviceReports" element={<ServiceRequest />} />
          {/* <Route path="farmer/maintenance" element={<FarmerMain />} /> */}
          <Route path="farmer/dronesimulation" element={<DroneSimulation />} />
          <Route
            path="farmer/dronesimulation/"
            element={<SimulationHomePage />}
          />
          <Route
            path="farmer/dronesimulation/create"
            element={<CreateSimulationDrone />}
          />
          <Route
            path="farmer/dronesimulation/confirm"
            element={<CreateDronePage />}
          />

          <Route path="pilot" element={<PilotDashboard />} />
          <Route path="pilot/scheduleOne/" element={<PilotSchedule title={"Pilot  Schedule"} btn={"Schedule"} />} />
          <Route path="pilot/scheduleTwo" element={<ScheduleTwo />} />
          <Route path="pilot/scheduleThree/:id" element={<ScheduleThree />} />

          {/* <Route path="pilot/myschedule" element={<MySchedule />} /> */}
          {/* maps */}
          <Route path="drone/cloud/map" element={<CouldDashboardMap />} />
          <Route path="drone/cloud/tracking" element={<DroneCloudTracking />} />
          <Route path="drone/catalog" element={<DroneCatalog />} />

          <Route path="farmer/management" element={<FarmerManagement />} />
          <Route path="drone/management" element={<DroneManagement />} />
          <Route path="pilot/management" element={<PilotManagement />} />
          <Route path="farm/management" element={<FarmManagement />} />
          <Route path="pilot/schedule" element={<PilotSchedule />} />
          <Route path="farmer/maintenance" element={<TimesPerDay title={"My Schedule for maintenance"} btn={"Confirm"} />} />
        </Route>

        {/* Page 1 : Cloud Dashboard Home*/}
        {/* <Route path="/admin/cloudDashboardHome" element={<CloudDashboardHome />} /> */}

        {/* Page 2 : Drone Fleet Statistics Pie Charts*/}
        <Route path="/admin/droneFleetStatistics" element={<DroneFleetStatistics />} />

        {/* Page 3 : Drone AIModel Evaluation*/}
        {/* <Route path="/admin/droneAIModelEvaluation" element={<DroneAIModelEvaluation />} /> */}

        {/* Page 4 : Drone Data Pictures*/}
        {/* <Route path="/admin/droneDataPictures" element={<DroneDataPictures />} /> */}

        {/* Page 5 : Service History,  we use can for anything*/}
        {/* <Route path="/admin/serviceHistory" element={<ServiceHistory />} /> */}

        <Route path="/adminaccess" element={<AdminAccess />} />

        {/* Page 1 : Cloud Dashboard Home Status in Boxes in Admin Page*/}
        <Route path="/admin/cloudDashboard" element={<CloudDashboardHome />} />

        {/* Page 2 : Drone Fleet Statistics Pie Charts*/}
        <Route path="/admin/statistics" element={<Statistics />} />

        {/* Page 3 : Drone AIModel Evaluation in Admin dashBoard* / */}
        <Route path="/admin/aimodels" element={<DroneAIModels />} />

        {/* Page 4 : Drone Data Pictures Farmer Service Report or Admin Pictures*/}
        <Route path="/admin/arvrtracking" element={<DroneData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
