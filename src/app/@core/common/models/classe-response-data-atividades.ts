import Atividade from "../interfaces/atividade.interface";

export default class ResponseDataAtividades {
    constructor(public activeTasks: Atividade[]) { }
}