import { rutasAPI } from "@/lib/utils";
import getCandidatos from "./getCandidatos";

async function addCandidato(correo,
    nombre,
    apellido,
    tipoDoc,
    fecha_nacimiento,
    numdoc) {

    try {
        const responseGet = await getCandidatos();
        if (responseGet.some(candidato => candidato.usuario === correo)) {
            alert("El usuario ya existe");
            return 0;
        }
        const response = await fetch(rutasAPI.addCandidato, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            USUARIO: correo,
            NOMBRE: nombre,
            APELLIDO: apellido,
            IDTIPODOCFK: tipoDoc,
            FECHANAC: fecha_nacimiento,
            NDOC:numdoc
          }),
        });
        alert("Candidato agregado correctamente");
    
        // if (response.ok) {
        //   const data = await response.json();
        //   return data;
        // } else {
        //   console.log(response)
        //   alert("Error al agregar el candidato:\n", response.message);
        //   return 0;
        // }
    } catch (error) {
    console.error("Error en la solicitud:", error);
    }
}

export default addCandidato;