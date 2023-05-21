
export const isUserAuthenticate= () => {
    if (localStorage.getItem("x-token")){
        return true;
    }
    return false;
}