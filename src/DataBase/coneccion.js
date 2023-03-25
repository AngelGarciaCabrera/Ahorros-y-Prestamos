const sql = require('mssql');

const config = {
    user: 'admin',
    password: 'admin123',
    server: 'localhost', // Dirección del servidor de SQL Server
    database: 'AhorrosPrestamos' // Nombre de la base de datos que se quiere conectar
};

(async () => {
    try {
        await sql.connect(config);
        console.log('Conectado a la base de datos de SQL Server');
    } catch (error) {
        console.error(`Error al conectar a la base de datos de SQL Server: ${error}`);
    }
})();

get.Connection();