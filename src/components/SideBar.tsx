import { useState, useEffect } from 'react';
import './SideBar.css';

function SideBar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsOpen(false); // Close sidebar on mobile view
            } else {
                setIsOpen(true); // Open sidebar on larger screens
            }
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize); // Update on window resize
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`sidebarContainer ${isOpen ? 'open' : 'closed'}`}>
            <button className="toggleButton" onClick={toggleSidebar}>
                {isOpen ? '←' : '→'}
            </button>
            <div className="sidebarInnerTop">
                <div className="sidebar">
                    <span role="img" aria-label="dashboard">📊</span>
                    {isOpen && <h3>Dashboard</h3>}
                </div>
                <div className="sidebar">
                    <span role="img" aria-label="notifications">🔔</span>
                    {isOpen && <h3>Notifications</h3>}
                </div>
                <div className="sidebar">
                    <span role="img" aria-label="items">📦</span>
                    {isOpen && <h3>My Items</h3>}
                </div>
            </div>
            <div className="sidebarInnerBottom">
                <div className="sidebar">
                    <span role="img" aria-label="account">👤</span>
                    {isOpen && <h3>Account</h3>}
                </div>
                <div className="sidebar">
                    <span role="img" aria-label="login/logout">🔓</span>
                    {isOpen && <h3>Login/LogOut</h3>}
                </div>
            </div>
        </div>
    );
}

export default SideBar;
