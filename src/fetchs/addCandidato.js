import { rutasAPI } from "@/lib/utils";

async function addCandidato(correo,
    nombre,
    apellido,
    tipoDoc,
    fecha_nacimiento,
    numdoc) {

    try {
        const response = await fetch(rutasAPI.addCandidato, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            usuario: correo,
            nombre,
            apellido,
            tipoDoc,
            fecha_Nac: fecha_nacimiento,
            nDoc:numdoc
          }),
        });
    
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          console.error("Error en la creación del candidato");
          return 0;
        }
    } catch (error) {
    console.error("Error en la solicitud:", error);
    }
}

export default addCandidato;