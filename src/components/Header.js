import Link from 'next/link'

const Header = () => {
  return (
    <header>
      <Link href="/">
        Edda Rabold
      </Link>
      <nav>
    
        <Link href="/about">
          about me
        </Link>
      </nav>
    </header>
  )
}

export default Header
