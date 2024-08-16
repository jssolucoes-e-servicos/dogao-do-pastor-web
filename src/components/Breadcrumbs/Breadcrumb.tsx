'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { JSX, useEffect, useState } from "react";

interface BreadcrumbProps {
  pageName: string;
}

const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  const [pathParts, setPathParts] = useState<string[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const parts = pathname.split('/').filter((part) => part);
      setPathParts(parts);
    }
  }, [pathname]);

  const generateBreadcrumbItems = () => {
    const breadcrumbItems: JSX.Element[] = [];
    let path = '';

    pathParts.forEach((part, index) => {
      path += `/${part}`;
      breadcrumbItems.push(
        <>
          <Link key={path} href={path} className="flex flex-row gap-2 dark:hover:text-rose-100">
            <li className={`capitalize font-bold ${index === 0 ? 'text-rose-700' : 'text-neutral-500'} dark:${index === 0 ? 'text-rose-700' : 'text-white'}`}>
              {decodeURIComponent(part)}
            </li>
          </Link>
          {index !== pathParts.length - 1 && (
            <span className={`font-bold ${index === 0 ? 'text-rose-700' : 'text-neutral-500'} dark:${index === 0 ? 'text-rose-700' : 'text-white'}`}>
              {" | "}
            </span>
          )}
       </>
      );
    });

    return breadcrumbItems;
  };

  // const generateBreadcrumbItems = () => {
  //   const breadcrumbItems: JSX.Element[] = [];
  //   let path = '';

  //   pathParts.forEach((part, index) => {
  //     path += `/${part}`;
  //     breadcrumbItems.push(
  //       <Link key={path} href={path} className="flex flex-row gap-2 dark:hover:text-rose-100">
  //         <li className={`capitalize font-medium ${index !== pathParts.length - 1 ? 'text-rose-700 dark:text-rose-700' : 'text-gray-600 dark:text-gray-200'}`}>
  //           {decodeURIComponent(part)}
  //           {index !== pathParts.length - 1 && ' | '}
  //         </li>
  //       </Link>
  //     );
  //   });

  //   return breadcrumbItems;
  // };

  return (
    <div className="mb-0 flex flex-col gap-3 h-9 pl-4 sm:flex-row sm:items-center sm:justify-between dark:bg-[#202020] bg-white border border-transparent border-b-stone-200 dark:border-b-stone-800">
      {/* <h2 className="text-title-md2 font-semibold text-gray-600 dark:text-gray-200">
        {pageName}
      </h2> */}

      <nav className="">
        <ol className="flex items-center gap-2">
          {/* <Link className="flex flex-row gap-2 dark:hover:text-rose-100" href="/dashboard">
            <li className="font-medium text-rose-700 dark:text-rose-700">Dashboardss</li>
            <span className="font-medium text-rose-700 dark:text-rose-700"> / </span>
          </Link> */}
          {generateBreadcrumbItems()}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;






// import Link from "next/link";
// interface BreadcrumbProps {
//   pageName: string;
// }
// const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
//   return (
//     <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//       <h2 className="text-title-md2 font-semibold text-gray-600 dark:text-gray-200">
//         {pageName}
//       </h2>

//       <nav>
//         <ol className="flex items-center gap-2">
//         <Link className=" flex flex-row gap-2 dark:hover:text-rose-100" href="/dashboard">
//           <li className="font-medium text-rose-700 dark:text-rose-700 ">Dashboard / </li>
//           <li className="font-medium text-gray-600 dark:text-gray-200">{pageName}</li>
//           </Link>
//         </ol>
//       </nav>
//     </div>
//   );
// };

// export default Breadcrumb;
// "use client"
// 'use client';

// import Link from "next/link";
// import { usePathname } from 'next/navigation';
// import { useEffect, useState } from "react";

// interface BreadcrumbProps {
//   pageName: string;
// }

// const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
//   const [pathParts, setPathParts] = useState<string[]>([]);
//   const pathname = usePathname();

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const parts = pathname.split('/').filter((part) => part);
//       setPathParts(parts);
//     }
//   }, [pathname]);

//   const generateBreadcrumbItems = () => {
//     const breadcrumbItems = [];
//     let path = '';

//     for (const part of pathParts) {
//       path += `/${part}`;
//       breadcrumbItems.push(
//         <Link key={path} href={path} className="flex flex-row gap-2 dark:hover:text-rose-100">
//           <li className="font-medium text-rose-700 dark:text-rose-700">{decodeURIComponent(part)} / </li>
//         </Link>
//       );
//     }

//     return breadcrumbItems;
//   };

//   return (
//     <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
//       <h2 className="text-title-md2 font-semibold text-gray-600 dark:text-gray-200">
//         {pageName}
//       </h2>

//       <nav>
//         <ol className="flex items-center gap-2">
//           <Link className="flex flex-row gap-2 dark:hover:text-rose-100" href="/dashboard">
//             <li className="font-medium text-rose-700 dark:text-rose-700">Dashboard / </li>
//           </Link>
//           {generateBreadcrumbItems()}
//         </ol>
//       </nav>
//     </div>
//   );
// };

// export default Breadcrumb;



//'use client';

// import Link from "next/link";
// import { usePathname } from 'next/navigation';
// import { JSX, useEffect, useState } from "react";

// interface BreadcrumbProps {
//   pageName: string;
// }

// const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
//   const [pathParts, setPathParts] = useState<string[]>([]);
//   const pathname = usePathname();

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const parts = pathname.split('/').filter((part) => part);
//       setPathParts(parts);
//     }
//   }, [pathname]);

//   const isCombinedPath = (part: string, index: number): boolean => {
//     // Adicione aqui suas regras para caminhos combinados
//     const combinedPathRules = [
//       { base: 'tipo', full: 'intent' },
//     ];

//     if (index < pathParts.length - 1) {
//       const nextPart = pathParts[index + 1];
//       return combinedPathRules.some(rule => rule.base === part && rule.full === nextPart);
//     }
//     return false;
//   };

//   const generateBreadcrumbItems = () => {
//     const breadcrumbItems: JSX.Element[] = [];
//     let path = '';
//     let skipNext = false;

//     pathParts.forEach((part, index) => {
//       if (skipNext) {
//         skipNext = false;
//         return;
//       }

//       if (isCombinedPath(part, index)) {
//         path += `/${part}/${pathParts[index + 1]}`;
//         breadcrumbItems.push(
//           <span key={path} className="flex items-center">
//             <Link href={path} className="flex flex-row gap-2 dark:hover:text-rose-100">
//               <li className={`capitalize font-medium ${index === 0 ? 'text-rose-700' : 'text-white'} dark:${index === 0 ? 'text-rose-700' : 'text-white'}`}>
//                 {decodeURIComponent(part)}/{decodeURIComponent(pathParts[index + 1])}
//               </li>
//             </Link>
//             {index + 1 !== pathParts.length - 1 && (
//               <span className={`font-medium ${index === 0 ? 'text-rose-700' : 'text-white'} dark:${index === 0 ? 'text-rose-700' : 'text-white'}`}>
//                 {" | "}
//               </span>
//             )}
//           </span>
//         );
//         skipNext = true;
//       } else {
//         path += `/${part}`;
//         breadcrumbItems.push(
//           <span key={path} className="flex items-center">
//             <Link href={path} className="flex flex-row gap-2 dark:hover:text-rose-100">
//               <li className={`capitalize font-medium ${index === 0 ? 'text-rose-700' : 'text-white'} dark:${index === 0 ? 'text-rose-700' : 'text-white'}`}>
//                 {decodeURIComponent(part)}
//               </li>
//             </Link>
//             {index !== pathParts.length - 1 && (
//               <span className={`font-medium ${index === 0 ? 'text-rose-700' : 'text-white'} dark:${index === 0 ? 'text-rose-700' : 'text-white'}`}>
//                 {" | "}
//               </span>
//             )}
//           </span>
//         );
//       }
//     });

//     return breadcrumbItems;
//   };

//   return (
//     <div className="mb-0 flex flex-col gap-3 h-9 sm:flex-row sm:items-center sm:justify-between bg-[#202020] dark:bg-neutral-600">
//       <nav className="bg-neutral-500">
//         <ol className="flex items-center gap-2">
//           <span className="flex items-center">
//             <Link href="/dashboard" className="flex flex-row gap-2 dark:hover:text-rose-100">
//               <li className="font-medium text-rose-700 dark:text-rose-700">Dashboard</li>
//             </Link>
//             {pathParts.length > 0 && <span className="font-medium text-rose-700 dark:text-rose-700"> | </span>}
//           </span>
//           {generateBreadcrumbItems()}
//         </ol>
//       </nav>
//     </div>
//   );
// };

// export default Breadcrumb;

// 'use client';

// import Link from "next/link";
// import { usePathname } from 'next/navigation';
// import { JSX, useEffect, useState } from "react";

// interface BreadcrumbProps {
//   pageName: string;
// }

// const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
//   const [pathParts, setPathParts] = useState<string[]>([]);
//   const pathname = usePathname();

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const parts = pathname.split('/').filter((part) => part);
//       setPathParts(parts);
//     }
//   }, [pathname]);

//   const generateBreadcrumbItems = () => {
//     const breadcrumbItems: JSX.Element[] = [];
//     let path = '';

//     pathParts.forEach((part, index) => {
//       path += `/${part}`;
//       breadcrumbItems.push(
//         <span key={path} className="flex items-center">
//           <Link href={path} className="flex flex-row gap-2 dark:hover:text-rose-100">
//             <li className={`capitalize font-medium ${index === 0 ? 'text-rose-700' : 'text-white'} dark:${index === 0 ? 'text-rose-700' : 'text-white'}`}>
//               {decodeURIComponent(part)}
//             </li>
//           </Link>
//           {index !== pathParts.length - 1 && (
//             <span className={`font-medium ${index === 0 ? 'text-rose-700' : 'text-white'} dark:${index === 0 ? 'text-rose-700' : 'text-white'}`}>
//               {" | "}
//             </span>
//           )}
//         </span>
//       );
//     });

//     return breadcrumbItems;
//   };

//   return (
//     <div className="mb-0 flex flex-col gap-3 h-9 sm:flex-row sm:items-center sm:justify-between bg-[#202020] dark:bg-neutral-600">
//       {/* <h2 className="text-title-md2 font-semibold text-gray-600 dark:text-gray-200">
//         {pageName}
//       </h2> */}

//       <nav className="bg-neutral-500">
//         <ol className="flex items-center gap-2">
//           <span className="flex items-center">
//             {/* <Link href="/dashboard" className="flex flex-row gap-2 dark:hover:text-rose-100">
//               <li className="font-medium text-rose-700 dark:text-rose-700">Dashboard</li>
//             </Link>
//             <span className="font-medium text-rose-700 dark:text-rose-700"> / </span> */}
//           </span>
//           {generateBreadcrumbItems()}
//         </ol>
//       </nav>
//     </div>
//   );
// };

// export default Breadcrumb;

