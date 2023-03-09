import { TTNForm, StatusTTN, History } from "components";
import { FC } from "react";

const Main: FC = () => {
    return (
        <>
            <TTNForm />
            <StatusTTN />
            <History />
        </>
    );
};

export default Main;
