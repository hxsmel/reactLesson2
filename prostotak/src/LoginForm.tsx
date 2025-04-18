import { useState } from "react";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault()

        console.log("Пользователь успешно зарегистрирован");
        console.log("Логин: " + username);
        console.log("Пароль: " + password);
    }

    return (
        <>
            <form className="loginForm" onSubmit={handleSubmit}>
                <p className="loginFormTitle" >Login Form</p>
                <input
                    type="text"
                    name="username"
                    className="usernameInput"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="text"
                    name="password"
                    className="passwordInput"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="loginButton">
                    LOGIN
                </button>
            </form>
        </>
    );
}