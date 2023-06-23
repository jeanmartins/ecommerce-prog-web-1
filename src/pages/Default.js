import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import React, { useState } from "react";
import api from "../services/api";
import './Default.css';
import { HomeAdmin } from "./HomeAdmin";
import { HomeCliente } from "./HomeCliente";


export function Default() {
    const [admin, setAdmin] = useState(false);

    let email = sessionStorage.getItem("email");
    if(email !== "" && email != null && email !== undefined){
        async function getProfile() {
            const response = await api.get(`/ap1/v1/user/getProfile/${email}`);
            setAdmin(response.data.admin);
        }
        getProfile();
    }

    return (
        <div className="layout">
            <Sidebar/>

            <div className="content">
                <Outlet /> 

                {admin ? 
                    <HomeAdmin />
                :
                    <HomeCliente />
                }
            </div>
        </div>
    )
}