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
import { useState } from "react"

function ListaCandidatos() {
    const [candidatos, setCandidatos] = useState([])
    const intiCandidatos = async () => {
        setCandidatos(await getCandidatos());
    }
    intiCandidatos();
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
                        <TableCell>{candidato.usuario}</TableCell>
                        <TableCell>{candidato.idTipoDocFK}</TableCell>
                        <TableCell>{candidato.nombre}</TableCell>
                        <TableCell>{candidato.apellido}</TableCell>
                        <TableCell>{candidato.fechaNac}</TableCell>
                        <TableCell>{candidato.nDoc}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ListaCandidatos


