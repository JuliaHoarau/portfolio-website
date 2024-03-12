import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-10 bg-transparent mb-3">   
    <div className="container mx-auto">
        <div className="flex xl:justify-between justify-between lg:p-8 p-10">
            <Link href="/">
                <h1 className="text-2xl font-bold">DaisyUI Example</h1>
            </Link>
            <ul className="flex justify-end items-center font-bold space-x-5 tracking-wide">
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </div>
    </header>

  )
}

export default Header