/*
 * @Author: Loritas 2223292817@qq.com
 * @Date: 2024-02-23 08:05:39
 * @LastEditors: Loritas 2223292817@qq.com
 * @LastEditTime: 2024-02-23 22:04:58
 * @FilePath: \nextjs-dashboard\app\ui\dashboard\nav-links.tsx
 * @Description: 
 * Copyright (c) 2024 by Loritas, All Rights Reserved. 
 */
// 将代码转换为客户端组件
'use client'

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

import Link from 'next/link'
// usePathname()是一个钩子，使用前必须将组件转换为客户端组件
// 即使用'use client'
// 该钩子的效果是获取用户当前路径
import { usePathname } from 'next/navigation'
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathName = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {"bg-sky-100 text-blue-600" : link.href === pathName}
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
