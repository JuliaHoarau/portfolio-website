import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-10 bg-transparent mb-3">   
    <div className="container mx-auto">
        <div className="flex xl:justify-center justify-center lg:p-8 p-10">
            <Link href="/">
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">DaisyUI Example</h1>
                </div> 
                <div>
                <img src="" alt="" />
              </div>
            </Link>
        </div>
    </div>
    </header>

  )
}

export default Header