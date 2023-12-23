import Sidebar from './components/Sidebar.jsx'
import Dashaboard from './pages/dashboard/Dashboard.jsx'
import Accordions from './pages/Accordions/Accordions.jsx'
import Alerts from './pages/Alerts/Alerts.jsx'
import Buttons from './pages/Buttons/Buttons.jsx'
import Connections from './pages/Connections/Connections.jsx'
import CreateConnection from './pages/Connections/Create.jsx'
import EditConnection from './pages/Connections/Edit.jsx'
import Contents from './pages/Contents/Contents.jsx'
import CreateContent from './pages/Contents/Create.jsx'
import EditContent from './pages/Contents/Edit.jsx'



import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import '../src/css/styles.css'

function App() {
    return (
        <BrowserRouter>
            <div id="app">
                <Sidebar />
                <Routes>
                    <Route path='/' element={<Dashaboard />} />
                    <Route path='/accordion' element={<Accordions />} />
                    <Route path='/alerts' element={<Alerts />} />
                    <Route path='/buttons' element={<Buttons />} />
                    <Route path='/connections' element={<Connections />} />
                    <Route path='/connections/create' element={<CreateConnection />} />
                    <Route path='/connections/edit/:id' element={<EditConnection />} />
                    <Route path='/contents' element={<Contents />} />
                    <Route path='/contents/create' element={<CreateContent />} />
                    <Route path='/contents/edit/:id' element={<EditContent />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;