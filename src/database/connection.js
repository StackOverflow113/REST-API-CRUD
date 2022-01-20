import sql from 'mssql'; //SE IMPORTA EL MODULO 

const dbSettings = { //CONFIGURACION DE LA BASE DE DATOS COMO SERVIDOR, USAURIO Y CONTRASENIA
    user: 'TEST',
    password: 'naruto200',
    server: 'localhost', // SERVER SE REFIERE A LA IP DONDE ESTA EL SERVIDOR POR DEFAULT ES 127.0.0.1 OR LOCALHOST
    database: 'CatalogosSPC',
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
};

export async function getConnection() { // SE CREA UNA FUNCION PARA PROBAR CONECTAR A TRAVEZ DE LOS SIGUIENTES PARAMETROS A NUESTRA BASE DE DATOS. 
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.log(error);
    }
}