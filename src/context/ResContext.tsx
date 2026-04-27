import { data } from "../data/data"
import type { Reserve } from "../types/Reserve";
import {
    createContext,
    useState,
	type PropsWithChildren,    
} from 'react';

export type ResContextValue = {
   reservation: Reserve[]
    setReservation: (reservation: Reserve) => void;
};

export const ResContext = createContext<ResContextValue | null>(null);

export function ResContextProvider({ children }: PropsWithChildren) {
    const [reservation, setReservation] = useState<Reserve[]>([data]);

    return <ResContext.Provider value={{reservation,setReservation}}>{children}</ResContext.Provider>;
}
