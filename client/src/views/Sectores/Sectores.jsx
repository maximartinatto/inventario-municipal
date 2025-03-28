import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSectores } from "../../redux/actions/store/sector";
import SectorCard from "../../components/SectorCard/SectorCard";

const Sectores = () => {
    const dispatch = useDispatch();
    const sectores = useSelector((state) => state.store.sector);

    useEffect(() => {
        dispatch(getSectores());
    }, [dispatch]);

    return (
        <div>
            <h2>Lista de Sectores</h2>
            {sectores.length === 0 ? (
                <p>No hay sectores registrados</p>
            ) : (
                <div>
                    {sectores?.map((sec) => (
                        <div key={sec.id}>
                            <SectorCard id={sec.id} cantidadEmpleados={sec.cantidadEmpleados} />
                        </div>
                    ))}
                </div>
            )} 
        </div>
    )
}

export default Sectores;
