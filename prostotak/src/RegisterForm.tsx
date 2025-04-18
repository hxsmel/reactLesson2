import { useState } from "react";

export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        console.log("Пользователь успешно зарегистрирован");
        console.log("Почта: " + email);
        console.log("Логин: " + username);
        console.log("Пароль: " + password);
    }

    return (
        <form className="registerForm" onSubmit={handleSubmit}>
            <p className="registerFormTitle">Register Form</p>
            <input
                type="email"
                name="email"
                className="registerEmailInput"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                name="username"
                className="registerUsernameInput"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="text"
                name="password"
                className="registerPasswordInput"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className="registerButton">
                WELCOME TO THE CLUB, BODY
            </button>
        </form>
    );
}
