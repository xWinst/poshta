import { BranchesForm, BranchesFilter, BranchesList } from "components";
import { FC } from "react";

const Branches: FC = () => {
    return (
        <>
            <BranchesForm />
            <BranchesFilter />
            <BranchesList />
        </>
    );
};

export default Branches;
