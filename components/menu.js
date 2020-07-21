import Link from 'next/link';

function Menu(){
    return (
      <nav className="navbar" role="navigation" arialabe="main navigation">
      <div className="navbar-brand">
      <a className="navbar-item" href="#">
      <img src="/images/logo.jpg" height="28" />
      </a>
  
      <a role="button" className="navbar-burger burger" arialabel="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-end">
      <Link href="/"><a className="navbar-item">Home</a></Link>
      <Link href="/eskul"><a className="navbar-item">Extrakuliker</a></Link>
      <Link href="/daftar"><a className="navbar-item">Daftar</a></Link>
      <Link href="/tentang"><a className="navbar-item">Tentang</a></Link>
      <div className="navbar-item has-dropdown is-hoverable">
      <Link href="/tenaga"><a className="navbar-item">Data Guru</a></Link>
        <div className="navbar-dropdown">
        <Link href="/tenaga/utama/kepsek"><a className="navbar-item">Utama</a></Link>
        <Link href="/tenaga/sekunder/ketua"><a className="navbar-item">Sekunder</a></Link>
        </div>
      <Link href="/login"><a className="navbar-item">Login</a></Link>
      </div>
      </div>
      </div>
      </nav>
    );
  }

export default Menu;
