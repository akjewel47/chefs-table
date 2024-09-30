import { FaRegUserCircle } from "react-icons/fa";

const NavBar = () => {
    return (
        <div className="container mx-auto navbar  bg-gray-200 rounded-2xl sticky p-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabindex="0"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <a className="pl-3 gap-0 text-2xl font-bold"><span className="text-secondary">Chefs</span>
                <span className="text-primary">Table</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Recipes</a></li>
                    <li><a>About</a></li>
                    <li><a>Search</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <label className="input input-bordered flex items-center gap-2 rounded-3xl">
                    <input
                        type="text"
                        placeholder="search"
                        class="input w-full max-w-xs" />

                    {/* <input type="text" className="grow" placeholder="Search" />

                     */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="`h-4 w-4 opacity-70">
                        <path
                            fill-rule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clip-rule="evenodd" />
                    </svg>
                </label>
                <div className="lg:p-3 p-2 bg-green-600 kg:text-2xl rounded-full">
                    <FaRegUserCircle />
                </div>
            </div>

        </div>
    );
};

export default NavBar;