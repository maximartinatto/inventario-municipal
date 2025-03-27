import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategorias } from "../../redux/actions/store/categoria";
import CategoriaCard from "../../components/CategoriaCard/CategoriaCard";

const Categorias = () => {
  const dispatch = useDispatch();
  const categorias = useSelector((state) => state.store.categoria);

  useEffect(() => {
    dispatch(getCategorias());
  }, [dispatch]);

  return (
    <div>
      <h2>Lista de Categorias</h2>
      {categorias.length === 0 ? (
        <p>No hay categorias registradas</p>
      ) : (
        <div>
          {categorias?.map((cat) => (
            <div key={cat.id}>
              <CategoriaCard id={cat.id} nombre={cat.nombre} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categorias;
