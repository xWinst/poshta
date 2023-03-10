import { FC } from "react";
import { useAppSelector, useAppDispatch } from "hooks/reduxHooks";
import { removeAll, removeTTN, setTTN } from "redux/historyReducer";
import { Button, Icon } from "components";
import s from "./History.module.scss";

const History: FC = () => {
    const list = useAppSelector((state) => state.history.list);

    const dispatch = useAppDispatch();

    const getStatus = (ttn: string) => {
        dispatch(setTTN(ttn));
    };

    const remove = (ttn: string) => {
        dispatch(removeTTN(ttn));
    };

    const deleteAll = () => {
        dispatch(removeAll());
    };

    return (
        <div className={s.container}>
            <p className={s.title}>Історія</p>
            <Button cn={s.btn} onClick={deleteAll}>
                Очистити історію
            </Button>
            <ul className={s.list}>
                {list.map((ttn) => (
                    <li key={ttn} onClick={() => getStatus(ttn)}>
                        <p>{ttn}</p>
                        <Icon
                            icon="delete"
                            w={20}
                            onClick={() => remove(ttn)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default History;
