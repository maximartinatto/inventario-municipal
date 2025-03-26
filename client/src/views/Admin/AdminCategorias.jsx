import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryEditor from "../../components/Admin/CategoryEditor";
import { getCategorias } from "../../redux/actions/store/categoria";

const AdminCategorias = () => {
    const dispatch = useDispatch()
    const categorias = useSelector((state) => state.categorias);

    useEffect(() => {
        dispatch(getCategorias())
    }, [dispatch])

    useEffect(() => {
        setLocalCategorias(categorias)
    }, [categorias])

    const [localCategorias, setLocalCategorias] = useState([]);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {localCategorias.map(categoria => (
                        <tr>
                            <td>{categoria.id}</td>
                            <td>{categoria.name}</td>
                            <td></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {
                <CategoryEditor />
            }
        </div>
    )
}

export default AdminCategorias;