import { Icon } from "components";
import s from "./Loader.module.scss";

const Loader = () => {
    return (
        <div className={s.container}>
            <Icon cn={s.img} icon="load" />
        </div>
    );
};

export default Loader;
