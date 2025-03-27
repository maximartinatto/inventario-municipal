import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDispositivoDetail } from "../../redux/actions/store/dispositivo";
import { clearDispositivoDetail } from "../../redux/actions/store/dispositivo";

const DetailDispositivo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDispositivoDetail(id));
    return () => dispatch(clearDispositivoDetail());
  }, [dispatch, id]);

  const dispositivo = useSelector(() => state.store.dispositivo);

  const backBtnOnClick = () => {
    navigate(-1);
  };

  return (
    <div>
      <div>
        <button onClick={backBtnOnClick}>Volver</button>
      </div>
      <div>
        <p>Nombre: {dispositivo?.nombre}</p>
        <p>Tipo: {dispositivo?.tipo}</p>
        <p>Marca: {dispositivo?.marca}</p>
        <p>Modelo: {dispositivo?.modelo}</p>
        <p>Número de Serie: {dispositivo?.numero_serie}</p>

        {dispositivo?.tipo === "Computadora" && (
          <>
            <p>Procesador: {dispositivo?.procesador}</p>
            <p>RAM: {dispositivo?.ram}</p>
            <p>Almacenamiento: {dispositivo?.almacenamiento}</p>
          </>
        )}

        {dispositivo?.tipo === "Impresora" && (
          <>
            <p>Tipo de Impresora: {dispositivo?.tipo_impresora}</p>
            <p>Toner: {dispositivo?.toner}</p>
            <p>Tecnología de Impresión: {dispositivo?.tecnologia_impresion}</p>
          </>
        )}

        <p>Sector ID: {dispositivo?.sector_id}</p>
        <p>Usuario ID: {dispositivo?.usuario_id}</p>
        <p>Categoría ID: {dispositivo?.categoria_id}</p>
        <p>Reparaciones ID: {dispositivo?.reparaciones_id}</p>
        <p>Fecha de Adquisición: {dispositivo?.fecha_adquisicion}</p>
        <p>Fecha de Finalización: {dispositivo?.fecha_finalizacion}</p>
        <p>Estado: {dispositivo?.estado}</p>

        <button>
          Agregar
        </button>
      </div>
    </div>
  );
};

export default DetailDispositivo;
