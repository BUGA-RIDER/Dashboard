import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import Dashboard from "./Pages/Dashboard";
import Trips from "./Pages/Trips";
import Vehicles from "./Pages/Vehicles";
import Payments from "./Pages/Payments";
import Settings from "./Pages/Settings";
import RiderPage from "./Pages/RiderPage";
import DriverPage from "./Pages/DriverPage";
import DriverList from "./Pages/DriverPage/DriverList";
import RiderList from "./Pages/RiderPage/RiderList";
import VehicleList from "./Pages/Vehicles/VehicleList";
import TripsList from "./Pages/Trips/TripsList";
import RiderProfile from "./Pages/RiderPage/RiderTab/RiderProfile";
import RiderTab from "./Pages/RiderPage/RiderTab/RiderTab";
import AmbassadorSideBar from "./components/AmbassadorSideBar";
import AmbasaddorDashboard from "./Pages/AmbasaddorArea/AmbasaddorDashboard";
import MyAssets from "./Pages/AmbasaddorArea/MyAssets";
import Training from "./Pages/AmbasaddorArea/Training";
import Login from "./Pages/AmbasaddorArea/Login";
import CreateAccount from "./Pages/AmbasaddorArea/CreateAccount";
import AmbasaddorRegistration from "./Pages/AmbasaddorArea/AmbasaddorRegistration";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileMenu from "./components/MobileMenu";
import { useEffect } from "react";
import { useStore } from "zustand";
import { loginStore } from "./stores/OnBoardingStores";
import { AdminLogin } from "./stores/AdminLogin";
import AdminLoginPage from "./Pages/AdminLoginPage";
import AmbasaddorPage from "./Pages/AmbasaddorPage";
import Warning from "./Pages/Warning";

function App() {
  const [theme, colorMode] = useMode();
  const matches = useMediaQuery("(min-width:600px)");

  const { user, setUser } = useStore(loginStore);

  const { admin, setAdmin } = useStore(AdminLogin);

  useEffect(() => {
    async function fetchDriver() {
      const userData = localStorage.getItem("user");
      if (userData) {
        setUser(JSON.parse(userData));
      }
    }
    if (!user) {
      fetchDriver();
    }
  }, [user, setUser]);

  useEffect(() => {
    async function fetchAdmin() {
      const userData = localStorage.getItem("admin");
      if (userData) {
        setAdmin(JSON.parse(userData));
      }
    }
    console.log(admin);
    if (!admin) {
      fetchAdmin();
    }
  }, [admin, setAdmin]);

  if (user) {
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            {matches ? <AmbassadorSideBar /> : null}
            <main className="content">
              {!matches ? <MobileMenu /> : <TopBar />}
              <Routes>
                <Route path="/" element={<AmbasaddorDashboard/>} />
                <Route path="/my-assets" element={<MyAssets/>} />
                <Route path="/training" element={<Training/>} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  } else if (admin) {
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <div className="app">

              { matches ?<SideBar />:null}
            <main className="content">
             { matches  ? <TopBar/>:null}
              <Routes>
                <Route
                  path="/"
                  element={ matches ? <Dashboard/>: <Warning/>}
                />
                <Route path="/ambasaddorspage" element={<AmbasaddorPage/>} />
                <Route path="/riderpage" element={<RiderPage />} />
                <Route path="/riderTab" element={<RiderTab />} />
                <Route path="/riderlist" element={<RiderList />} />
                <Route path="/riderProfile" element={<RiderProfile />} />
                <Route path="/DriverPage" element={<DriverPage />} />
                <Route path="/DriverList" element={<DriverList />} />
                <Route path="/Trips" element={<Trips />} />
                <Route path="/TripsList" element={<TripsList />} />
                <Route path="/Vehicles" element={<Vehicles />} />
                <Route path="/VehicleList" element={<VehicleList />} />
                <Route path="/Payments" element={<Payments />} />
                <Route path="/Settings" element={<Settings />} />
                <Route path="/my-assets" element={<MyAssets />} />
                <Route path="/training" element={<Training />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
  }
  else {
    // render UI for users who are not logged in
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <main className="content">
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<AdminLoginPage />} />
                <Route path="/create" element={<CreateAccount />} />
                <Route path="/registration" element={<AmbasaddorRegistration/>} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
         );
        }
      }

export default App;
