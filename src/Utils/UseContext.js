import { createContext } from "react";

const UserContext = createContext({
    loggedInUser:"Deafult user"
});

export default UserContext;