import styled from "@emotion/styled";
import { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useHistory } from "react-router";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { routes } from "./routes/routes";
import RenderRoutes from "./routes/RenderRoutes";
import { getToken, removeTokens } from "./useTokens";
import request from "./request";

export const Store = createContext({});

function App() {
    const [state, setState] = useState({
        isAuth: false,
        loading: true,
        userInfo: null,
        setTokens: (tokens) => {
            setState((prevstate) => {
                return {
                    ...prevstate,
                    tokens,
                };
            });
        },
        getUserData: async () => {
            const token = getToken();
            if (!token) {
                await setState((prevstate) => {
                    return {
                        ...prevstate,
                        isAuth: false,
                        userInfo: null,
                        loading: false,
                    };
                });
                return;
            }
            try {
                const response = await request({
                    entityName: "user/me",
                    method: "get",
                });
                await setState((prevstate) => {
                    return {
                        ...prevstate,
                        userInfo: response?.data,
                        isAuth: true,
                        loading: false,
                    };
                });
            } catch (e) {
                console.log(e);
                removeTokens();
                await setState((prevstate) => {
                    return {
                        ...prevstate,
                        isAuth: false,
                        userInfo: null,
                        loading: false,
                    };
                });
                throw e;
            }
        },
    });

    useEffect(() => {
        const getUserData = async () => {
            await state.getUserData();
        };
    }, [state.tokens]);
    return (
        <Store.Provider value={state}>
            <Theme preset={presetGpnDefault}>
                {/* <BrowserRouter>
                <Routes>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/home" component={Home} />
                </Routes>
            </BrowserRouter> */}
                <Router>
                    <RenderRoutes routes={routes} />
                </Router>
            </Theme>
        </Store.Provider>
    );
}

export default App;

const Container = styled.div`
    margin: 300px auto 0 auto;
    width: 1000px;
    height: 2000px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    padding: 30px;
`;
