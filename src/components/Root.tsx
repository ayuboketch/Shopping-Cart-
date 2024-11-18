import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import './Root.css';

function Root() {
    return (
        <div className="root">
            <NavBar />
            <div className="content">
                <Outlet /> {/* Renders nested route content */}
            </div>
            <Footer />
        </div>
    );
}

export default Root;
