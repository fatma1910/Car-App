import { MouseEventHandler } from "react";

export interface CustomButtonProp {
    title:string ;
    containerStyle?: string ;
    handleClick?:MouseEventHandler<HTMLButtonElement> ;
    btnType?:"button" | "submit" ;
    textStyles?:string;
    rigthIcon?:string;
    isDisabled?:boolean;
}

export interface SearchManufacturerProps {
    manufacturer:string;
    setManufacturer:(manufacturer:string) => void;
}

export interface CarProps {
    city_mpg: number;
    class:string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive:string;
    fuel_type:string;
    highway_mpg: number;
    make:string;
    model:string;
    transmission:string;
    year: number;
}
export interface filterProps {
    manufacturers: string; 
    year: number; 
    limit: number; 
    fuel: string; 
    model: string;
}
export interface OptionProps {
    title:string;
    value:string;
}
export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}
export interface ShowMoreProps {
    pageNumber:number;
    isNext: boolean;
}

export interface FilterProps {
    manufacturers?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
}

export interface HomeProps {
    searchParams: FilterProps;
}

