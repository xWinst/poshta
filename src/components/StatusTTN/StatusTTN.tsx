import { FC } from "react";
import s from "./StatusTTN.module.scss";

const StatusTTN: FC = () => {
    return (
        <div className={s.container}>
            <p>
                <span>Статус доставки:</span>Отримано
            </p>
            <p>
                <span>Відправлено:</span>Отримано
            </p>
            <p>
                <span>Доставлено:</span>Отримано
            </p>
        </div>
    );
};

export default StatusTTN;
