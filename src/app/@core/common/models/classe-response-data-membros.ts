import { Membro } from "../interfaces/membro.interface";

export default class ResponseDataMembros {
    constructor(public rowsActiveMember: Membro[], public count: number) { }
}