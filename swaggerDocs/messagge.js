import responses from "./response";

const message = {
    "/api/v1/message" : {
        get: {
            tags: ["message"],
            summary: " All logged in.",
            responses,
        }
    },

    "/api/v1/message/{id}" : {
        get: {
            tags: ["message"],
            summary: "This is a display of a single logged in user.",
            parameters:[
                {
                in: "path",
                name: "id",
                required: true,
                }
            ],
            responses,
        }
    },

    
}


export default message;