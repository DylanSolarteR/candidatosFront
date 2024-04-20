import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectTipoDoc } from "@/components/SelectTipoDoc.jsx";
import { DatePicker } from "@/components/DatePicker.tsx";
import { formSchema } from "@/lib/formSchema";
import addCandidato from "@/fetchs/addCandidato";

function FormCreacion() {
    const [correo, setCorreo] = useState("");
    const [correoError, setCorreoError] = useState(false);
    const [nombre, setNombre] = useState("");
    const [nombreError, setNombreError] = useState(false);
    const [apellido, setApellido] = useState("");
    const [apellidoError, setApellidoError] = useState(false);
    const [tipoDoc, setTipoDoc] = useState("");
    const [tipoDocError, setTipoDocError] = useState(false);
    const [fecha_nacimiento, setFechaNacimiento] = useState("");
    const [fechaNacimientoError, setFechaNacimientoError] = useState(false);
    const [numdoc, setNumdoc] = useState("");
    const [numdocError, setNumdocError] = useState(false);


    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            correo,
            nombre,
            apellido,
            tipoDoc,
            fecha_nacimiento,
            numdoc: parseInt(numdoc),
        };
        const result = formSchema.safeParse(data);
        if (!result.success) {
            setCorreoError(result.error.message.includes("correo"));
            setNombreError(result.error.message.includes("nombre"));
            setApellidoError(result.error.message.includes("apellido"));
            setTipoDocError(result.error.message.includes("tipoDoc"));
            setFechaNacimientoError(result.error.message.includes("fecha_nacimiento"));
            setNumdocError(result.error.message.includes("numdoc"));
            return;
        }
        setCorreoError(false);
        setNombreError(false);
        setApellidoError(false);
        setTipoDocError(false);
        setFechaNacimientoError(false);
        setNumdocError(false);

        addCandidato(correo, nombre, apellido, tipoDoc, fecha_nacimiento, numdoc);


    };

    return (
        <form onSubmit={onSubmit}>
            <Label htmlFor="email">Ingrese su correo electronico </Label>
            <Input type="email" id="email" placeholder="Correo Electronico"
                onChange={(e) => setCorreo(e.target.value)}
            />
            {correoError && <p className="text-red-500">Correo invalido</p>}


            <Label htmlFor="nombre">Ingrese su nombre</Label>
            <Input type="nombre" id="nombre" placeholder="Nombre"
                onChange={(e) => setNombre(e.target.value)}
            />
            {nombreError && <p className="text-red-500">Nombre invalido</p>}

            <Label htmlFor="apellido">Ingrese su apellido</Label>
            <Input type="apellido" id="apellido" placeholder="Apellido"
                onChange={(e) => setApellido(e.target.value)}
            />
            {apellidoError && <p className="text-red-500">Apellido invalido</p>}

            <Label htmlFor="tipoDoc">Seleccione el tipo de su documento </Label>
            <SelectTipoDoc setTipoDoc={setTipoDoc} client:load />
            {tipoDocError && <p className="text-red-500">Tipo de documento invalido</p>}

            <Label htmlFor="fecha_nacimiento">Seleccione su fecha de nacimiento</Label>
            <DatePicker setFechaNacimiento={setFechaNacimiento} client:load />
            {fechaNacimientoError && <p className="text-red-500">Fecha de nacimiento invalida</p>}


            <Label htmlFor="numdoc">Ingrese su número de documento</Label>
            <Input type="numdoc" id="numdoc" placeholder="Número de documento"
                onChange={(e) => setNumdoc(e.target.value)}
            />
            {numdocError && <p className="text-red-500">Número de documento invalido</p>}

            <div className="flex justify-center p-4">
                <button className="p-2 border-sky-950 border rounded-md" type="submit">Enviar</button>
            </div>
        </form>
    )
}

export default FormCreacion