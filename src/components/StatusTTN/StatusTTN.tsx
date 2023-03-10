import { FC } from "react";
import { Loader } from "components";
import { useAppSelector } from "hooks/reduxHooks";
import s from "./StatusTTN.module.scss";

const getBranch = (branch: string, city: string) => {
    const index = branch.indexOf(":") + 1;
    return `${branch.slice(0, index)} ${city}, ${branch.slice(index)}`;
};

const StatusTTN: FC = () => {
    const {
        status,
        receivedDate,
        deliveryDate,
        dispatchDate,
        senderBranch,
        senderCity,
        recipientBranch,
        recipientCity,
        isParcelDelivered,
        isLoading,
        error,
    } = useAppSelector((state) => state.status);

    return (
        <div className={s.container}>
            {error ? (
                <p className={s.error}>{error}&nbsp;&#128577;</p>
            ) : (
                <>
                    <div>
                        <p className={s.title}>Статус</p>
                        <p className={s.status}>{status}</p>

                        {receivedDate && (
                            <div className={s.infoBox}>
                                <p>Дата та час:</p>
                                <p className={s.info}>{receivedDate}</p>
                            </div>
                        )}
                    </div>

                    <div>
                        <p className={s.title}>Відправка</p>

                        {deliveryDate ? (
                            <>
                                <div className={s.infoBox}>
                                    <p>Дата та час:</p>
                                    <p className={s.info}>{deliveryDate}</p>
                                </div>
                                <div className={s.infoBox}>
                                    <p>Адреса:</p>
                                    <p className={s.info}>
                                        {getBranch(senderBranch, senderCity)}
                                    </p>
                                </div>
                            </>
                        ) : (
                            <p className={s.info}>Інформація відсутня</p>
                        )}
                    </div>
                    <div>
                        <p className={s.title}>Доставка</p>
                        <div className={s.infoBox}>
                            {isParcelDelivered ? (
                                <p>Дата та час:</p>
                            ) : (
                                <p>Очікуваний час:</p>
                            )}
                            <div className={s.textBox}>
                                <p className={s.info}>{dispatchDate}</p>
                            </div>
                        </div>

                        <div className={s.infoBox}>
                            <p>Адреса:</p>
                            <p className={s.info}>
                                {getBranch(recipientBranch, recipientCity)}
                            </p>
                        </div>
                    </div>
                </>
            )}
            {isLoading && <Loader />}
        </div>
    );
};

export default StatusTTN;
