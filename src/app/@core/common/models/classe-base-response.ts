export default class BaseResponse<Type> {
    constructor(
        public status: boolean,
        public date: Date,
        public data?: Type,
        public error?: string
    ) { }
}