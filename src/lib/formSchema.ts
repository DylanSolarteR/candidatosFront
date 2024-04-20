import { z } from "zod"

export const formSchema = z.object({
    correo: z.string().email(),
    nombre: z.string().min(2).max(30),
    apellido: z.string().min(2).max(30),
    tipoDoc: z.string().min(2).max(30),
    numdoc: z.number().min(1).max(999999999999999),
    fecha_nacimiento: z.string(),
});
