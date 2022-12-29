import responses from "./response";

const comment = {
    "/api/v1/comments" : {
        get: {
            tags: ["comments"],
            summary: "This is a display of all comments.",
            responses,
        }
    },

    "/api/v1/comments/{id}" : {
        get: {
            tags: ["comments"],
            summary: "This is a display of a single comments.",
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


export default comment;