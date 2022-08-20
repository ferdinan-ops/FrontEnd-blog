import Link from "next/link";
import { useState } from "react";
import Container from "./Container";
export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [offcanvas, setOffcanvas] = useState(false);
  const [search, setSearch] = useState(false);
  const dropdownList = [
    { text: "Internet", href: "/posts" },
    { text: "Books", href: "/posts" },
    { text: "Open Source", href: "/posts" },
  ];
  return (
    <nav className="py-10">
      <Container>
        <div className="flex items-center">
          <div className="w-3/12 lg:hidden">
            <button onClick={() => setOffcanvas(!offcanvas)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </button>
          </div>
          <div className="lg:w-2/12 w-6/12">
            <Link href="/">
              <a className="lg:justify-start flex items-center justify-center">
                <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl">F</div>
                Ferdinan
              </a>
            </Link>
          </div>
          <div className="w-3/12 lg:hidden text-right">
            <button onClick={() => setSearch(!search)}>
              <svg className="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 21L16.65 16.65" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </button>
          </div>
          <div className={`fixed w-full bg-gradient-to-b from-gray-600 to-gray-900 top-0  h-full z-[9999]  transition-all p-10 lg:block lg:w-7/12 lg:bg-none lg:static ${offcanvas ? "left-0" : "-left-full"}`}>
            <button className="absolute top-10 right-10 lg:hidden" onClick={() => setOffcanvas(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <ul className="lg:space-x-10 lg:flex-row lg:items-center lg:space-y-0 flex flex-col space-y-4">
              <li><Link href="/posts"><a className="hover:underline">UI Design</a></Link></li>
              <li><Link href="/posts"><a className="hover:underline">Front-End</a></Link></li>
              <li><Link href="/posts"><a className="hover:underline">Back-End</a></Link></li>
              <li className="relative">
                <a className="hover:underline cursor-pointer flex items-center" onClick={() => setDropdown(!dropdown)}>
                  Lainnya
                  <svg className="ml-2 mt-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                {dropdown && (
                  <ul className="absolute w-[200px] bg-gray-800 rounded shadow-xl mt-4 z-10">
                    {dropdownList.map(({ text, href }) => (
                      <li key={text} className="border-b border-white/5 last:border-0">
                        <Link href={href}>
                          <a className="px-5 py-[12px] flex hover:bg-gray-700/60">{text}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className={`lg:px-0 lg:w-3/12 lg:static absolute w-full px-10 left-0 top-10 z-10 transition-all ${search ? 'top-10' : '-top-40'}`}>
            <input className="bg-gray-700 py-3 px-6 w-full lg:rounded-full rounded-lg bg-search pl-12 border-none outline-none" placeholder="Search..." />
            <button className="absolute top-3 right-14 lg:hidden" onClick={() => setSearch(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
