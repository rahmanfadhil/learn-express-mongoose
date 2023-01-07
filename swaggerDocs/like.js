import responses from "./response";

const likes = {
    "/api/v1/blog/{id}/like" : {
        get: {
            tags: ["likes"],
            summary: "This is a display of all likes.",
            responses,
        }
    },

    "/api/v1/blog/{id}/like/{id}" : {
        get: {
            tags: ["likes"],
            summary: "This is a display of a single likes.",
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


export default likes;