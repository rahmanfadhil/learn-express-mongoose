import responses from "./response";

const user = {
    "/api/v1/users" : {
        get: {
            tags: ["users"],
            summary: "This is a display of all users.",
            responses,
        }
    },

    "/api/v1/users/{id}" : {
        get: {
            tags: ["users"],
            summary: "This is a display of a single users.",
            parameters:[
                {
                in: "path",
                name: "id",
                required: true,
                }
            ],
            responses,
        }
    }
}


export default user;