import './Header.scss'
import menu from '../../../assets/icon/menu.svg'
import favorite from '../../../assets/icon/favorite.svg'
import search from '../../../assets/icon/search.svg'
import user from '../../../assets/icon/user.svg'
import cart_shop from '../../../assets/icon/cart_shop.svg'

export const Header = ():JSX.Element => {
  return (
    <header className="header">
        <nav className="navbar">
            <div className="navbar__left">
                <figure className="navbar__figure">
                    <img className='navbar__img' src={menu} alt="" />
                </figure>
                <p>Luchito Store</p>
            </div>
            <div className="navbar__right">
                <figure className="navbar__figure navbar__figure--hidden">
                    <img className='navbar__img' src={favorite} alt="" />
                </figure>
                <figure className="navbar__figure">
                    <img className='navbar__img' src={search} alt="" />
                </figure>
                <figure className="navbar__figure">
                    <img className='navbar__img' src={cart_shop} alt="" />
                </figure>
                <figure className="navbar__figure">
                    <img className='navbar__img' src={user} alt="" />
                </figure>
            </div>
        </nav>
    </header>
  )
}
