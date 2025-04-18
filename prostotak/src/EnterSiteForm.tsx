import { useState } from "react";
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default function EnterSiteForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [formType, setFormType] = useState<"login" | "register">("login");

    const openModal = (type: "login" | "register") => {
        setFormType(type);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <section className="enterButtons">
            <button onClick={() => openModal("login")}>Войти</button>
            <button onClick={() => openModal("register")}>Регистрация</button>

            {isOpen && (
                <div className="modalOverlay">
                    <div className="modalContent">
                        <button onClick={closeModal} className="closeButton">X</button>
                        {formType === "login" ? <LoginForm /> : <RegisterForm />}
                    </div>
                </div>
            )}
        </section>
    );
}

//проверяем
