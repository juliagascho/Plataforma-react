
import { Link, Outlet } from "react-router-dom";

export function Home() {
    return (
        <div className="home">
            <h1>Home</h1>
            <ul>
                <li>
                    <Link to="/secao1">Seção 1</Link>
                </li>
                <li>
                    <Link to="/secao2">Seção 2</Link>
                </li>
                <li>
                    <Link to="/secao3">Seção 3</Link>
                </li>
            </ul>
            <Outlet />
        </div>
        
    )
}