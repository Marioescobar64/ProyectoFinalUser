'use strict';

// Importaciones
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { corsOptions } from './cors-configuration.js';
import { dbConnection } from './db.js';

// Rutas

const BASE_URL = '/GIPS/v1';

import companyRoutes from '../src/company/company-routes.js';
import evidenceRoutes from '../src/evidence/evidence-routes.js';
import institudRoutes from '../src/institud/institud-routes.js';
import practiceRoutes from '../src/practice/practice-routes.js';
import reposteRoutes from '../src/reposteHoursmodel/reposteHours-routes.js';
import reviewRoutes from '../src/review/review-routes.js'; 
import studentRoutes from '../src/student/student-routes.js'; 
import supervisorRoutes from '../src/supervisor/supervisor-routes.js';
import userRoutes from '../src/user/user-routes.js';

// Configuracion de los middlewares (la aplicacion)
const middlewares = (app) => {
    app.use(express.urlencoded({ extended: false, limit: '10mb'}));
    // esta linea le indica a express que los archivos tengan un limite de 10mb
    app.use(express.json({limit: '10mb'}));
    // cors utiliza la funcion que creamos en cors-configuration
    app.use(cors(corsOptions));
    // Morgan se encarga del manejo de errores
    app.use(morgan('dev'));
}

// Rutas de integracion de todas las rutas

const routes =(app) => {

    app.use(`${BASE_URL}/company`, companyRoutes);
    app.use(`${BASE_URL}/evidence`, evidenceRoutes);
    app.use(`${BASE_URL}/institud`, institudRoutes);
    app.use(`${BASE_URL}/practice`, practiceRoutes);
    app.use(`${BASE_URL}/reposte`, reposteRoutes);
    app.use(`${BASE_URL}/review`, reviewRoutes);
    app.use(`${BASE_URL}/student`, studentRoutes);
    app.use(`${BASE_URL}/supervisor`, supervisorRoutes);
    app.use(`${BASE_URL}/user`, userRoutes);
}
    

// funcion para iniciar el servidor
const initServer = async (app) => {
    // Creacion de la instancia de la aplicacion
    app = express();
    const PORT = process.env.PORT || 3002;

    try {
        dbConnection();
        middlewares(app);
        routes(app);
        
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
            console.log(`Base URL: http://localhost:${PORT}${BASE_URL}`)
        });

        // Primera ruta
        app.get(`${BASE_URL}/health`, (req, res) => { 
            res.status(200).json(
                {
                    status: 'ok',
                    service: 'GIPS',
                    version: '1.0.0'
                }
            );
        });

    } catch (error) {
        console.log(error);
    }
}

export  { initServer };