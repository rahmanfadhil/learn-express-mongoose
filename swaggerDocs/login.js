import responses from "./response";

const login = {
    "/api/v1/login" : {
        get: {
            tags: ["login"],
            summary: " All logged in.",
            responses,
        }
    },

    "/api/v1/login/{id}" : {
        get: {
            tags: ["login"],
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


export default login;