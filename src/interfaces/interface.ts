export interface IErrorMessage {
    message: String
    code: String
}

export interface IRootstate {
    movies:Array<Object>,
    users: Array<Object>
}