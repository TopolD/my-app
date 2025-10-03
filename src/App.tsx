import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/auth/LoginSection';
import Register from './auth/RegisterSection';


export default function App (){
    return (
        <Router>
            <Routes>
                <Route path="/register" element={< Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </Router>
    )
}