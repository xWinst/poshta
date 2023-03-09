import { FC, useState, FormEvent, ChangeEvent } from "react";
import { Button } from "components";
import s from "./TTNForm.module.scss";

const TTNForm: FC = () => {
    const [TTN, setTTN] = useState<string>("");
    const [error, setError] = useState<string>("");

    const submitData = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const pattern = /^[125]\d{13}$/;
        if (pattern.test(TTN)) console.log("TTN: ", TTN);
        else setError("Невірний формат номеру ТТН");
    };

    const saveData = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        if (value.length > 14) return;
        if (Number(value) || !value) setTTN(value);
    };

    return (
        <form className={s.form} onSubmit={submitData}>
            <div>
                <input
                    value={TTN}
                    onChange={saveData}
                    placeholder="Введіть ТТН"
                    title="Номер може містити лише цифри, починатися з 1 або 2 або 5 та мати загальну довжину 14 символів"
                />
                {error && <p>{error}</p>}
            </div>
            <Button type="submit">Пошук</Button>
        </form>
    );
};

export default TTNForm;
