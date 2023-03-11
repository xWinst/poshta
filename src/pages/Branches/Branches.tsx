import { BranchesForm, BranchesFilter, BranchesList } from "components";
import { FC } from "react";

const Branches: FC = () => {
    return (
        <div>
            <BranchesForm />
            <BranchesFilter />
            <BranchesList />
        </div>
    );
};

export default Branches;
