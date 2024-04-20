import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SelectTipoDoc({ setTipoDoc }) {
    return (
        <Select defaultValue="" onValueChange={
            setTipoDoc
        }>
            <SelectTrigger className="">
                <SelectValue placeholder="Seleccione su tipo de documento" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem value="CC">CC Cedula</SelectItem>
                    <SelectItem value="TI">TI Tarjeta de Identidad</SelectItem>
                    <SelectItem value="TE">TE Tarjeta de Extranjería</SelectItem>
                    <SelectItem value="CE">CE Cédula de Extranjería</SelectItem>
                    <SelectItem value="NIT">NIT Nit</SelectItem>
                    <SelectItem value="PAS">PAS Pasaporte</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}