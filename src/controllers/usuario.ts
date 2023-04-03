import  { Request, Response } from 'express'
import Usuario from '../modules/usuario'


export const getUsuarios = async (req: Request, res: Response) => {

    const usuarios = await Usuario.findAll()

    res.json({
        usuarios
    })

}

export const getUsuario = async(req: Request, res: Response) => {

    const {id} = req.params

    const usuario = await Usuario.findByPk(id)

    if(usuario) {
        res.json({
            msg: "obtener usuario", 
            usuario
        })
    } else {
        res.json({
            msg: 'No se encontro el id del usuario'
        })
    }



}

export const postUsuarios = async (req: Request, res: Response) => {

  const {body}  = req

    try {   

        const usuario = Usuario.build(body)
        console.log(usuario)

        await usuario.save()

     res.json({
        msg: "El usuario se guardo correctamente", 
        body
    })
    } catch (error) {
        console.log(error)
     res.json({
        msg: "Habla con el admin", 
        body
      })   
    }

   
}

export const putUsuarios = (req: Request, res: Response) => {

    const {id} = req.params

    
    res.json({
        msg: "usuarios actualizado", 
        id
    })
}


export const deleteUsuarios = (req: Request, res: Response) => {

    const {id} = req.params

    
    res.json({
        msg: "Se elimino el usuario", 
        id
    })
}