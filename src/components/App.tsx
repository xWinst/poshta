import { FC, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Header, Loader, Main, BranchesList, BranchInfo } from "components";

const PageNotFound = lazy(() => import("pages/PageNotFound/PageNotFound"));

export const App: FC = () => {
    const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;
    console.log("REACT_APP_API_KEY: ", REACT_APP_API_KEY);
    console.log("REACT_APP_BASE_URL: ", REACT_APP_BASE_URL);
    console.log("process.env: ", process.env);

    return (
        <>
            <Header />
            <main className="main">
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="branches" element={<BranchesList />} />
                        <Route path="branches/:id" element={<BranchInfo />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Suspense>
            </main>
        </>
    );
};
