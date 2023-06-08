export interface IChat{
    author: {
        name: string,
        clientId: string
    },
    content: string,
    authorId: string  
}

export interface IUser{  
    clientId: string  
    name:string
    id:string
}

export interface ITyping{  
    isTyping: boolean  
    name:string
}