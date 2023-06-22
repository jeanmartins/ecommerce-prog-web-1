import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

import './Default.css';
import { HomeAdmin } from "./HomeAdmin";

const user = {
    tipo: 'admin',
    id: '123'
}

const isLogged = true;

export function Default() {
    return (
        <div className="layout">
            <Sidebar/>

            <div className="content">
                <Outlet /> 

                {isLogged && user.tipo === 'admin' ? 
                    <HomeAdmin />
                :
                    <>cliente</>
                }
            </div>
        </div>
    )
}