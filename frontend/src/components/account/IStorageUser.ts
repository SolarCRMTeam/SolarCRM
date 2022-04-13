import { RepresentativeDto } from "../../services/SolarCRM/models";

export interface IStorageUser {
    representative?: RepresentativeDto;
    login?: string;
    password?: string;
}