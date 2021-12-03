const ACCESS_TOKEN = "token-access";
const REFRESH_TOKEN = "token-refresh";

const getToken = () => localStorage.getItem(ACCESS_TOKEN);

const setTokens = (data) => {
    localStorage.setItem(ACCESS_TOKEN, data.access);
    localStorage.setItem(REFRESH_TOKEN, data.refresh);
};

const removeTokens = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
};

const getRefreshToken = () => {
    return localStorage.getItem(REFRESH_TOKEN);
};

export { getToken, setTokens, removeTokens, getRefreshToken };
