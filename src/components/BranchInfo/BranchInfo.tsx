import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { useAppSelector, useAppDispatch } from "hooks/reduxHooks";
import { getBranchByRef, Branch } from "redux/branchesOperation";
import { Days } from "db/Days";
import services from "db/services.json";
import s from "./BranchInfo.module.scss";

const days: Days = require("db/days.json");
const daysOfWeek = Object.keys(days) as (keyof Days)[];

const BranchesInfo: FC = () => {
    const { id } = useParams();
    const list = useAppSelector((state) => state.branches.list);
    const branch: Branch | undefined = list.find((branch) => branch.id === id);

    const dispatch = useAppDispatch();

    useJsApiLoader({
        googleMapsApiKey: "AIzaSyBYsRtoxJrgaMjebjmySYw6BeAGcmw_ZUc",
    });

    useEffect(() => {
        if (!branch && id) dispatch(getBranchByRef(id));
    }, [branch, dispatch, id]);

    const servicesFlags = [
        branch?.canGetMoneyTransfer,
        branch?.hasPOSTerminal,
        branch?.hasBicycleParking,
        branch?.hasInternational,
        branch?.hasSelfWorkplaces,
        branch?.hasGeneratorEnabled,
    ];

    const availableServices = services.filter((_, i) => servicesFlags[i]);
    const position = {
        lat: branch?.latitude || 0,
        lng: branch?.longitude || 0,
    };

    return branch ? (
        <div>
            <p className={s.title}>{branch.name}</p>
            <div className={s.prop}>
                <p className={s.propName}>Адреса:</p>
                <p className={s.propValue}>{branch.adress}</p>
            </div>
            <div className={s.prop}>
                <p className={s.propName}>Телефон:</p>
                <p className={s.propValue}>{branch.phone}</p>
            </div>
            <div className={s.prop}>
                <p className={s.propName}>Обмеження ваги:</p>
                <p className={s.propValue}>{branch.maxWeight}</p>
            </div>
            <div className={s.prop}>
                <p>Обмеження за габаритами (см):</p>
                <p className={s.propValue}>{branch.maxDimensions}</p>
            </div>

            {availableServices.length > 0 && (
                <ul className={s.list}>
                    Доступні послуги та сервіси:
                    {availableServices.map((service) => (
                        <li key={service}>{service}</li>
                    ))}
                </ul>
            )}
            <p className={s.title}>Графік роботи</p>
            <ul className={s.schedule}>
                {daysOfWeek.map((day) => (
                    <li key={day}>
                        <p className={s.day}>{days[day]}</p>
                        <p className={s.time}>{branch.schedule[day]}</p>
                    </li>
                ))}
            </ul>

            <GoogleMap
                mapContainerStyle={{ width: "100%", height: "400px" }}
                center={position}
                zoom={17}
            >
                <MarkerF position={position} />
            </GoogleMap>
        </div>
    ) : (
        <div>Відділення не знайдено</div>
    );
};

export default BranchesInfo;
