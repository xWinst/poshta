import { FC, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader, Main, BranchesList, BranchInfo } from "components";

const PageNotFound = lazy(() => import("pages/PageNotFound/PageNotFound"));

export const App: FC = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="branches" element={<BranchesList />} />
                <Route path="branches/:id" element={<BranchInfo />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Suspense>
    );
};
