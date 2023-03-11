import { FC, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Header, Loader, Main, BranchInfo } from "components";

const Branches = lazy(() => import("pages/Branches/Branches"));
const PageNotFound = lazy(() => import("pages/PageNotFound/PageNotFound"));

export const App: FC = () => {
    return (
        <>
            <Header />
            <main className="main">
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="branches" element={<Branches />} />
                        <Route path="branches/:id" element={<BranchInfo />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Suspense>
            </main>
        </>
    );
};
