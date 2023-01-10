import responses from "./response";

const blog = {
    "/api/v1/blogs" : {
        get: {
            tags: ["blogs"],
            summary: "This is a display of all blogs.",
            responses,
        }
    },

    "/api/v1/blogs/{id}" : {
        get: {
            tags: ["blogs"],
            summary: "This is a display of a single blogs.",
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


export default blog;