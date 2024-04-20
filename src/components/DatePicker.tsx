import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker({ setFechaNacimiento }: { setFechaNacimiento: any }) {
    const [date, setDate] = React.useState<Date>(
        new Date()
    );
    setFechaNacimiento(date.getFullYear() + "-" + lpad((date.getMonth() + 1).toString()) + "-" + lpad((date.getDate()).toString()))

    function lpad(str: string | any[]) {
        const padding = str.length === 1 ? "0" : "";
        return padding + str;
    }


    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full justify-start font-normal",
                        !date && "text-muted-foreground w-full"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Elija su fecha de nacimiento</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    onDayClick={(day) => {
                        setFechaNacimiento(day.getFullYear() + "-" + lpad((day.getMonth() + 1).toString()) + "-" + lpad((day.getDate()).toString()))
                    }}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}
