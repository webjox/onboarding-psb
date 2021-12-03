import Login from "../components/login/Login";
import Home from "../components/home/Home";
export const routes = [
    {
        label: "Логин",
        path: "/login",
        component: () => <Login />,
    },
    {
        label: "Home",
        path: "/home",
        component: () => <Home />,
    },
    // {
    //     label: "Настройки",
    //     path: "/settings",
    //     component: () => <Settings />,
    //     children: [
    //         {
    //             label: "Аккаунт",
    //             path: "/account",
    //             component: () => <Account />,
    //             private: true,
    //         },
    //         {
    //             label: "Платежная информация",
    //             path: "/payment",
    //             component: () => <Payment />,
    //             private: true,
    //         },
    //         {
    //             label: "Маркетплейсы",
    //             path: "/marketplace",
    //             component: () => <Marketplace />,
    //             private: true,
    //         },
    //         {
    //             label: "Подписки",
    //             path: "/subscriptions",
    //             component: () => <Subscriptions />,
    //             private: true,
    //         },
    //     ],
    //     private: true,
    // },
];
