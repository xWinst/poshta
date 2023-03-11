import { FC, useState, FormEvent, ChangeEvent } from "react";
import { useAppDispatch } from "hooks/reduxHooks";
import { Button } from "components";
import { getBranches } from "redux/branchesOperation";
import s from "../TTNForm/TTNForm.module.scss";

const BranchesForm: FC = () => {
    const [city, setCity] = useState<string>("");
    const [error, setError] = useState<string>("");

    const dispatch = useAppDispatch();

    const submitData = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const pattern = /^[а-яА-ЯІіЇїЄєҐґ '-]+$/;
        if (pattern.test(city)) {
            dispatch(getBranches(city));
        } else setError("Невірний формат номеру ТТН");
    };

    const saveData = (event: ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };

    return (
        <form className={s.form} onSubmit={submitData}>
            <div>
                <input
                    value={city}
                    onChange={saveData}
                    placeholder="Введіть назву міста"
                    title="Назва може містити лише літери Української або Російської абетки, тире та пробіл"
                />
                {error && <p>{error}</p>}
            </div>
            <Button type="submit">Пошук</Button>
        </form>
    );
};

export default BranchesForm;
