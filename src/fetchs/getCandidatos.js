import { rutasAPI } from "@/lib/utils";

async function getCandidatos() {

    try {
        const response = await fetch(rutasAPI.getCandidatos, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
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

export default getCandidatos;