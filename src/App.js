import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './bonsai/Bonsai_Home';
import Navbar from './bonsai/Navbar';
import JuniperPage from './bonsai/JuniperPage'
import PinePage from './bonsai/PinePage';
import JapaneseMaplePage from './bonsai/JapaneseMaplePage';
import CherryBlossomPage from './bonsai/CherryBlossomPage';
import CedarPage from './bonsai/CedarPage';
import GinsengFicusPage from './bonsai/GinsengFicusPage';
import WeepingFigPage from './bonsai/WeepingFigPage';
import DwarfJadePage from './bonsai/DwarfJadePage';
import PomegranatePage from './bonsai/PomegranatePage';

function  App() {
  return (
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route exact path = "/" element={<Home />} />
            <Route path = "/Juniper" element={<JuniperPage />}/>
            <Route path = "/Pine" element={<PinePage />} />
            <Route path = "/JapaneseMaple" element={<JapaneseMaplePage />}/>
            <Route path = "/CherryBlossom" element={<CherryBlossomPage/>} />
            <Route path = "/Cedar" element={<CedarPage />}/>
            <Route path = "/GinsengFicus" element={<GinsengFicusPage />}/>
            <Route path = "/WeepingFig" element={<WeepingFigPage />}/>
            <Route path = "/DwarfJade" element={<DwarfJadePage/>}/>
            <Route path = "/Pomegranate" element={<PomegranatePage />}/>
          </Routes>
        </div>
      </div>
  );
}
export default App;