import addCandidato from "@/fetchs/addCandidato"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const rutasAPI = {
  addCandidato: "localhost:3000/api/addCandidato",
  getCandidatos: "localhost:3000/api/getCandidatos",
}