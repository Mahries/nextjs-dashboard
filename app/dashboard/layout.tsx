/*
 * @Author: Loritas 2223292817@qq.com
 * @Date: 2024-02-23 18:44:11
 * @LastEditors: Loritas 2223292817@qq.com
 * @LastEditTime: 2024-02-23 20:44:19
 * @FilePath: \nextjs-dashboard\app\dashboard\layout.tsx
 * @Description: 
 * Copyright (c) 2024 by Loritas, All Rights Reserved. 
 */
import SideNav from '@/app/ui/dashboard/sidenav'

// 解构赋值：从传入的props中提取children属性
// 多个props：({ children, isOpen }: { children: React.ReactNode; isOpen: boolean }) 
export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
      );
}