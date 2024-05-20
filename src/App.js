import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loginform from './Componants/Loginform';
import Forgotpass from './Componants/Forgotpass';
import Dashboard from './Componants/Dashboard';
import Home from './Componants/Dasboardpages/Home';
import State from './Componants/Dasboardpages/State';
import City from './Componants/Dasboardpages/City';
import Wearhouse from './Componants/Dasboardpages/Wearhouse';
import Addstate from './Componants/Dasboardpages/Addstate';
import Addcity from './Componants/Dasboardpages/Addcity';
import Addwearhouse from './Componants/Dasboardpages/Addwearhouse';
import Editstate from './Componants/Dasboardpages/Editstate';
import Editcity from './Componants/Dasboardpages/Editcity';
import Editwearhouse from './Componants/Dasboardpages/Editwearhouse';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/forgotpass" element={<Forgotpass />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="state" element={<State />} />
          <Route path="state/addstate" element={<Addstate />} /> {/* Add this route */}
          <Route path="state/editstate" element={<Editstate />} /> {/* Add this route */}
          <Route path="city" element={<City />} />
          <Route path="city/addcity" element={<Addcity />} /> {/* Add this route */}
          <Route path="city/editcity" element={<Editcity />} /> {/* Add this route */}
          <Route path="wearhouse" element={<Wearhouse />} />
          <Route path="wearhouse/addwearhouse" element={<Addwearhouse />} /> {/* Add this route */}
          <Route path="wearhouse/editwearhouse" element={<Editwearhouse />} /> {/* Add this route */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
