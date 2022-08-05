import Link from 'next/link';

export default function FourOhFour() {
  return <>
    <h1>404 - Nada aqui... por enquanto</h1>
    <Link href="/">
      <a>
        Go back home
      </a>
    </Link>
  </>
}