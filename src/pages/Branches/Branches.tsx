import { BranchesForm, BranchesFilter } from "components";
import { FC } from "react";

const Branches: FC = () => {
    return (
        <div>
            <BranchesForm />
            <BranchesFilter />
        </div>
    );
};

export default Branches;
