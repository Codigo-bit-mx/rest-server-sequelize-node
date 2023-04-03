import express, { Application } from 'express'
import cors from 'cors'
import userRoutes from '../routes/usuario'
import db from '../db/connection'

class Server {
        
    private app: Application
    private port: string 

    private apiPath = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express()
        this.port = process.env.PORT || '8080'

        this.dbconection()
        this.middleware()
        this.routes()
    }

    async dbconection() {
        try {
            await db.authenticate()
            console.log("Database connection")
        } catch (error: any) {
            throw new Error(error)
        }
    }

    middleware () {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use( this.apiPath.usuarios, userRoutes)
    }

    listen () {
        this.app.listen( this.port, () => {
            console.log("Servidor corriendo en puerto " + this.port)
        })
    }
}


export default Server