export default function RegisterForm() {
    return (
        <form className="registerForm">
            <p className="registerFormTitle">Register Form</p>
            <input
                type="email"
                className="registerEmailInput"
                placeholder="Email"
            />
            <input
                type="text"
                className="registerUsernameInput"
                placeholder="Username"
            />
            <input
                type="text"
                className="registerPasswordInput"
                placeholder="Password"
            />
            <button className="registerButton">
                WELCOME TO THE CLUB, BODY
            </button>
        </form>
    );
}
