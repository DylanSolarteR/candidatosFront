import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import getCandidatos from "@/fetchs/getCandidatos"

function ListaCandidatos() {
    // const { candidatos } = getCandidatos();
    const candidatos = [{
        correo: "a@hotmail.com",
        tipoDoc: "DNI",
        nombre: "Juan",
        apellido: "Perez",
        fecha_nacimiento: "1990/01/01",
        numdoc: "12345678"
    },
    {
        correo: "b@hotmail.com",
        tipoDoc: "DNI",
        nombre: "Maria",
        apellido: "Gomez",
        fecha_nacimiento: "1990/01/01",
        numdoc: "12345678"
    },
    ]
    return (
        <Table className="bg-white">
            <TableCaption>Lista de los candidatos.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Usuario</TableHead>
                    <TableHead>TipoDeDoc</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Apellido</TableHead>
                    <TableHead>Fecha de Nacimiento</TableHead>
                    <TableHead>Numero de Documento</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {candidatos.map((candidato, i) => (
                    <TableRow key={i}>
                        <TableCell>{candidato.correo}</TableCell>
                        <TableCell>{candidato.tipoDoc}</TableCell>
                        <TableCell>{candidato.nombre}</TableCell>
                        <TableCell>{candidato.apellido}</TableCell>
                        <TableCell>{candidato.fecha_nacimiento}</TableCell>
                        <TableCell>{candidato.numdoc}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ListaCandidatos


