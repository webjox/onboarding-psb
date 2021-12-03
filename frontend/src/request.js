import axios from "axios";
import { getRefreshToken, getToken, removeTokens } from "./useTokens";
// setTokens

const instance = axios.create({});

const url = "http://192.168.0.39:8000";
let errorRequests = [];
let refresh = false;

const refreshToken = async () => {
    const refresh = getRefreshToken();
    if (!refresh) return;
    try {
        const { data } = await axios({
            method: "post",
            url: `${url}/api/user/token/refresh/`,
            data: { refresh },
        });
        localStorage.setItem("token-refresh", data.refresh);
        localStorage.setItem("token-access", data.access);
    } catch (e) {
        removeTokens();
        throw e;
    }
};

const setUrl = (config) => {
    const id = config.id ? `${config.id}${config.slash ? "/" : ""}` : "";

    return `${url}/api/v1/${config.entityName}/${id}`;
};

instance.interceptors.request.use(
    (config) => {
        if (!refresh) {
            config.url = setUrl(config);
        }

        const token = getToken();
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        refresh = false;
        return config;
    },
    (error) => {
        console.log("Ошибка перед запросом, ", error);
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        errorRequests.push(error);
        console.log(error.response);
        if (error?.response?.status === 401) {
            if (error.response.data.code !== "token_not_valid") return;
            if (errorRequests.length >= 5) {
                removeTokens();
                errorRequests = [];
            }
            await refreshToken();
            refresh = true;
            return await instance(error.config);
        }
        throw error;
    }
);

export default async (config) => {
    return instance(config);
};
