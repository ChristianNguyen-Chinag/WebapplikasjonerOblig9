import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/trivia">
            <a className="first">Trivia</a>
          </Link>
        </li>
        <li>
          <Link href="/trivia/create">
            <a>Create</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
