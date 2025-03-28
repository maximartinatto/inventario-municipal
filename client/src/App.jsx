import './App.css'
import { Routes, Route } from "react-router-dom";
import Dispositivo from "./views/Dispositivo/Dispositivo";
import AdminDashboard from "./views/Admin/AdminDashboard";
import DetailDispositivo from "./views/Dispositivo/DispositivoDetail"
import Categorias from "./views/Categorias/Categoria";
import CategoriasDetail from "./views/Categorias/CategoriaDetail";
import NavBar from "./components/NavBar/Navbar";
import Reparaciones from "./views/Reparaciones/Reparaciones";
import Sectores from "./views/Sectores/Sectores";
import UsuariosAsignados from "./views/UsuariosAsignados/UsuariosAsignados";
import AdminDispositivoAdd from "./components/Admin/AdminDispositivoAdd";
import AdminCategorias from "./views/Admin/AdminCategorias";
import RegisterLogin from "./views/Register/Register";

function App() {
  
  return (
    <div className='App'>

      <NavBar/>
      <Routes>
        {/* Routes for users */}
        <Route exact path="/categorias/:id" element={<CategoriasDetail/>}/>
        <Route exact path="/categorias" element={<Categorias/>}/>
        <Route exact path="/dispositivo" element={<Dispositivo/>}/>
        <Route exact path="/dispositivo/:id" element={<DetailDispositivo/>}/>
        <Route exact path="/register" element={<RegisterLogin/>}/>
        {/* Routes for admins */}
        <Route exact path="/admin" element={<AdminDashboard/>}/>
        <Route exact path="/admin/reparaciones" element={<Reparaciones/>}/>
        <Route exact path="/admin/dispositivos" element={<AdminDispositivoAdd/>}/>
        <Route exact path="/admin/sectores" element={<Sectores/>}/>
        <Route exact path="/admin/usuarios" element={<UsuariosAsignados/>}/>
        <Route exact path="/admin/categorias" element={<AdminCategorias/>}/>
      </Routes>

    </div>
  )
}

export default App
