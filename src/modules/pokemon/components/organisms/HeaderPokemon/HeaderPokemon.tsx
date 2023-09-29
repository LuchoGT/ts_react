import { Link, useNavigate } from "react-router-dom";
import "./HeaderPokemon.scss";
// import { useLoginPage } from "@/modules/auth/components/pages/Login/useLoginPage";
import { MenuIcon } from "@/assets/icon/MenuIcon";
import { UserIcon } from "@/assets/icon/UserIcon";
import { CartIcon } from "@/assets/icon/CartIcon";
import { SearchIcon } from "@/assets/icon/SearchIcon";
import { WishlistIcon } from "@/assets/icon/WishlistIcon";
import { MenuLogged } from "../MenuLogged/MenuLogged";
import { useHeaderPokemon } from "./useHeaderPokemon";
import { useEffect, useState } from "react";

export const HeaderPokemon = (): JSX.Element => {
  const { isMenuLoginOpen, openMenuLogin, closeMenuLogin } = useHeaderPokemon();

  // const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // const openSearch = () => setIsSearchOpen(true);
  // const closeSearch = () => setIsSearchOpen(false);

  // const {user,logout} = useLoginPage();
  // console.log(user);

  const navigate = useNavigate();
  //   const onLogout = () => {
  //     // logout();
  //     navigate('/auth/login', {
  //         replace: true
  //     });
  // }

  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Elimina el token de localStorage al cerrar sesión
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setLoggedIn(false);
    navigate('/auth/login', {
      replace: true
  });
  };

  const email = localStorage.getItem("email") || "";

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar__left">
          <figure className="navbar__figure">
            <MenuIcon />
          </figure>
          <p>{email} Store</p>
        </div>
        <div className="navbar__right">
          <figure className="navbar__figure navbar__figure--hidden">
            <WishlistIcon />
          </figure>
          <figure className="navbar__figure">
            <SearchIcon />
          </figure>
          <figure className="navbar__figure">
            <CartIcon />
          </figure>
          {loggedIn ? (
            <figure className="navbar__figure" onClick={() => openMenuLogin()}>
              <UserIcon />
            </figure>
          ) : (
            <figure className="navbar__figure">
              <Link to="/auth/login">
                <UserIcon />
              </Link>
            </figure>
          )}
          <MenuLogged
            isMenuLoginOpen={isMenuLoginOpen}
            closeMenuLogin={closeMenuLogin}
            handleLogout={handleLogout}
            email={email}
          />
        </div>
      </nav>

      {/* <div className={`${isSearchOpen ? "openSearch" : "hidden"}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="openSearch__search icon icon-tabler icon-tabler-search"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
          <path d="M21 21l-6 -6"></path>
        </svg>
        <input
          type="text"
          placeholder="Buscar pokemon"
          className="openSearch__input"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="openSearch__close icon icon-tabler icon-tabler-x"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={() => closeSearch()}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M18 6l-12 12"></path>
          <path d="M6 6l12 12"></path>
        </svg>
      </div> */}
    </header>
  );
};
