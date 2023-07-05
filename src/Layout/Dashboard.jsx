import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaShoppingBasket, FaUtensils, FaUsers } from "react-icons/fa";
import { AiFillHome, AiOutlineMenu, AiFillMail } from 'react-icons/ai';
import useCart from "../hooks/useCart";
import { MdOutlineManageAccounts } from "react-icons/md";
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    const navOptions = <>
        {
            isAdmin ? <>
                <li><NavLink to="/dashboard/adminHome"><AiFillHome /> Admin Home</NavLink></li>
                <li><NavLink to="/dashboard/addItem"><FaUtensils /> Add an Item</NavLink></li>
                <li><NavLink to="/dashboard/manageItems"><MdOutlineManageAccounts /> Manage Items</NavLink></li>
                <li><NavLink to="/dashboard/bookings">< FaCalendarAlt /> Manage Bookings</NavLink></li>
                <li><NavLink to="/dashboard/allUsers"><FaUsers /> All Users</NavLink></li>
            </> : <>
                <li><NavLink to="/dashboard/userHome"><AiFillHome /> User Home</NavLink></li>
                <li><NavLink to="/dashboard/reservations"><FaCalendarAlt /> Reservations</NavLink></li>
                <li><NavLink to="/dashboard/history"><FaWallet /> Payment History</NavLink></li>
                <li>
                    <NavLink to="/dashboard/myCart"><FaShoppingCart /> My Cart
                        <span className="badge badge-primary inline">+{cart?.length || 0}</span>
                    </NavLink>
                </li>
            </>
        }
        <div className="divider lg:divider-horizontal"></div>
        <li><NavLink to="/"><FaHome /> Home</NavLink></li>
        <li><NavLink to="/menu"><AiOutlineMenu /> Menu</NavLink></li>
        <li><NavLink to="/order/salad"><FaShoppingBasket /> Shop</NavLink></li>
        <li><NavLink to="/contact"><AiFillMail /> Contact</NavLink></li>
    </>
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-teal-600">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal drawer-nav">
                            {navOptions}
                        </ul>
                    </div>
                </div>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-teal-600 drawer-nav">
                    {navOptions}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;