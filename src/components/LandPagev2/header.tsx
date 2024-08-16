import Image from "next/image";
import Link from "next/link";

// import LogoImg from '/asset/logo.svg';
// import SearchIcon from '/asset/icon-search.svg';
// import IconUser from '/asset/icon-user.svg';
import { GridContainer } from "./grid";

const arrayMenu = [
  'Início',
  'Benefícios',
  'Para quem é o curso?',
  'Preços promocionais',
  'Sobre nós'
]

export function Header() {
  const activedStyled = 'bg-green-actived text-opacity-100 rounded-full'
  return (
    <header className="fixed z-50 top-0 w-full h-16 bg-gray-50 flex items-center">
      <GridContainer className="flex items-center justify-between">
        <img
          src="/assets/ivera.svg"
          alt="logo"
        />
        <div className="flex items-center gap-20">
          <nav className="flex gap-2">
            {
              arrayMenu.map((item, index) => (
                <Link key={index} href="#" className={`px-3 py-1 text-neutral-800 text-opacity-40 hover:text-opacity-100 transition-all ${index === 0 ? activedStyled : ''}`}>{item}</Link>
              ))
            }

          </nav>
          <div className="flex items-center gap-6">
            <button>
              <img
                src="/asset/icon-search.svg"
                alt="Icon Search"
              />
            </button>
            <button className="flex items-center gap-2">
              <img src="/asset/icon-user.svg" alt="Icon user" />
              <span className="text-neutral-800 font-medium">Fazer login</span>
            </button>
          </div>
        </div>
      </GridContainer>
    </header>
  )
}