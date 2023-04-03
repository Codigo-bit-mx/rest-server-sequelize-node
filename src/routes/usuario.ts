import { Router } from "express";
import { getUsuarios,
         getUsuario,
         postUsuarios,
         putUsuarios,
         deleteUsuarios
       } from "../controllers/usuario";


const router = Router()

router.get('/',    getUsuarios )
router.get('/:id',    getUsuario)
router.post('/',   postUsuarios)
router.put('/:id',    putUsuarios)
router.delete('/:id', deleteUsuarios)


export default router
