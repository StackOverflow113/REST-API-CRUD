import { getConnection } from '../database/connection'

export const getUsers = async(req, res) => {
    const pool = await getConnection(); //SE LLAMA A LA CONEXION Y REGRESA EL POOL 
    const result = await pool.request().query("SELECT CaUSUA_nID,CaUSUA_tUsuario,CaUSUA_tPassword FROM CatalogosSPC.dbo.CaUsuarios"); //CON EL POOL SE HACE UNA PETICION LA CUAL ES UNA CONSULTA SQL EN ESTE CASO COMO VA A DEMORAR SE PONE UN AWAIT PARA QUE CUANDO TERMINE GUARDE EL RESULTADO EN LA CONSTANTE RESULT Y LA IMPIME EN CONSOLA
    console.log(result);
    res.json(result.recordset) // 5204
};
