"use client"
//import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Fragment, ReactNode, useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import type { UserType } from "@/types";
import Sidebar from "@/components/Sidebar";
import { getUserLogged } from "@/app/repository/users/getUserLogged";
import { useTheme } from "@/components/ThemeProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { usePathname } from 'next/navigation';
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
//const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { theme, toggleTheme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // const [userData, setUserData] = useState<UserType | null>(null);

  // useEffect(() => {
  //   getUserLogged()
  //     .then((userData) => {
  //       setUserData(userData);
  //     })
  //     .catch((error) => {
  //       console.error("Erro ao obter dados do usuário:", error);
  //     });
  // }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    // ${theme === 'light' ? 'bg-slate-50' : 'bg-neutral-900'}
          <div className={`flex h-full min-h-screen bg-slate-50 dark:bg-neutral-900 `}>
            <Sidebar isOpen={isSidebarOpen} />
            <div className="flex-1">
              <NavBar  toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} onThemeToggle={handleThemeToggle} theme={theme} />
              <div className="flex-1">
              {/* <Breadcrumb pageName="layout" /> */}
                {children}</div>
            </div>
          </div>
       
    
  );
}










// import { Inter } from "next/font/google";
// import "@/styles/globals.css";
// import { ReactNode, useState, useEffect } from "react";
// import NavBar from "@/components/NavBar";
// import Sidebar from "@/components/Sidebar";
// import { getUserLogged } from "@/app/repository/users/getUserLogged";
// import { useTheme, ThemeProvider } from "@/components/ThemeProvider";
// import type { UserType } from "@/types";

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({ children }: { children: ReactNode }) {
//   const { theme, toggleTheme } = useTheme();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [userData, setUserData] = useState<UserType | null>(null);

//   useEffect(() => {
//     getUserLogged()
//       .then((userData) => {
//         setUserData(userData);
//       })
//       .catch((error) => {
//         console.error("Erro ao obter dados do usuário:", error);
//       });
//   }, []);

//   useEffect(() => {
//     document.documentElement.className = theme;
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };
//   const handleThemeToggle = () => {
//     toggleTheme();
//   };

//   return (
//     <ThemeProvider>
//       <div className={`flex h-full min-h-screen ${theme === 'dark' ? 'bg-neutral-800/30' : 'bg-slate-50'}`}>
//         <Sidebar isOpen={isSidebarOpen} />
//         <div className="flex-1">
//           <NavBar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} onThemeToggle={handleThemeToggle} theme={theme} />
//           <div className="flex-1">{children}</div>
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// }


// "use client"
// import { Inter } from "next/font/google";
// import "@/styles/globals.css";
// import { Fragment, ReactNode, useState, useEffect } from "react";
// import NavBar from "@/components/NavBar";
// import type { UserType } from "@/types";
// import Sidebar from "@/components/Sidebar";
// import { getUserLogged } from "@/app/repository/users/getUserLogged";
// import { useTheme } from "@/components/ThemeProvider";
// import { ThemeProvider } from "@/components/ThemeProvider";
// //import { ThemeProvider } from "@/components/ThemeProvider";

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({
//   children,
// }: {
//   children: ReactNode;
// }) {

//   const { theme, toggleTheme } = useTheme();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [userData, setUserData] = useState<UserType | null>(null);

//   useEffect(() => {
//     getUserLogged()
//       .then((userData) => {
//         setUserData(userData);
//       })
//       .catch((error) => {
//         console.error("Erro ao obter dados do usuário:", error);
//       });
//   }, []);

//   useEffect(() => {
//     document.documentElement.className = theme;
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };
//   const handleThemeToggle = () => {
//     toggleTheme();
//   };

//   return (
//     // <html lang="en">
//     //   <body className={`${inter.className} ${theme === "dark" ? "dark" : ""}`}>
//     //   <ThemeProvider>
      
//     //       <div className={`flex h-full min-h-screen ${theme === 'dark' ? 'bg-neutral-800/30' : 'bg-slate-50'}`}>
//     //         <Sidebar isOpen={isSidebarOpen} />
//     //         <div className="flex-1">
//     //         <NavBar  toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} onThemeToggle={handleThemeToggle} theme={theme} />
//     //           <div className="flex-1">{children}</div>
//     //         </div>
//     //       </div>
         
//     //     </ThemeProvider>
//     //   </body>
//     // </html>
//     <ThemeProvider>
//       <html lang="en">
//         <body className={` ${inter.className} ${theme === "dark" ? "dark" : ""}`}>
//           <div className={`flex h-full min-h-screen ${theme === 'dark' ? 'bg-neutral-800/30' : 'bg-slate-50'}`}>
//             <Sidebar isOpen={isSidebarOpen} />
//             <div className="flex-1">
//               <NavBar  toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} onThemeToggle={handleThemeToggle} theme={theme} />
//               <div className="flex-1">{children}</div>
//             </div>
//           </div>
//         </body>
//       </html>
//     </ThemeProvider>
//   );
// }

// "use client"

// import { Inter } from "next/font/google";
// import "@/styles/globals.css";
// import { ThemeProvider } from "@/components/ThemeProvider";
// const inter = Inter({ subsets: ["latin"] });



// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//     <ThemeProvider>
//        {children}
//         </ThemeProvider>
       
//         </body>
//     </html>
//   );
// }



// "use client"
// import { Fragment, ReactNode, useState, useEffect } from "react";
// import NavBar from "@/components/NavBar";
// import "../../../styles/globals.css";
// import type { UserType } from "@/types";
// import Sidebar from "@/components/Sidebar";
// import { getClientUserLogged } from "@/app/repository/users/getClientUserLogged";
// import { useTheme } from "@/components/ThemeProvider";

// export default function Layout({ children  }: { children: ReactNode  }) {

//   const { theme, toggleTheme } = useTheme();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [userData, setUserData] = useState<UserType | null>(null);

//   useEffect(() => {
//     getClientUserLogged().then(userData => {
//       setUserData(userData); // Atualize o estado do usuário quando os dados estiverem disponíveis
//     }).catch(error => {
//       console.error("Erro ao obter dados do usuário:", error);
//     });
//   }, []);

//   useEffect(() => {
//     document.documentElement.className = theme;
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };
//   const handleThemeToggle = () => {
//     toggleTheme();
//   };

//   return (
  
//    <div className={`flex h-full min-h-screen  dark:text-rose-700 ${theme === 'dark' ? ' bg-neutral-800/30' : '  bg-slate-50'}`}>
//       <Sidebar  isOpen={isSidebarOpen} />

//       <div className="flex-1">
//       <NavBar  toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} onThemeToggle={handleThemeToggle} theme={theme} />
           
//         <div className="flex-1">{children}</div>
      
       
//       </div>
//     </div>
//   );

// }
