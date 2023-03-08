import { Icon } from "components";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import s from "./PageNotFound.module.scss";

const PageNotFound = () => {
    const navigate = useNavigate();

    const handleBtnClick = () => {
        navigate("/", { replace: true });
    };

    return (
        <div className={s.container}>
            <div className={s.background}>
                <h2 className={s.title}>404 Сторінка не знайдена</h2>
                <Icon icon="404" w={500} />
                <p className={s.text}>
                    Ой! Сторінка, яку ви шукаєте, не існує.
                </p>

                <Button onClick={handleBtnClick}>
                    Перейти на головну сторінку
                </Button>
            </div>
        </div>
    );
};

export default PageNotFound;
