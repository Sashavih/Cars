import { UseAuth } from "../../hooks/useAuth";

const Header = () => {
    const { user, setUser } = UseAuth;
    return user ? (
        <>
            <h2>Welcome, {user.name}!</h2>
            <button onClick={() => setUser(null)}>Logout</button>
        </>
    )
        : (
            <button onClick={() => setUser({
                name: 'Sasha',
            })}>Login</button>
        )
}
export default Header;
