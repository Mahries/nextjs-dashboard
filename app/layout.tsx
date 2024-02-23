/*
 * @Author: Loritas 2223292817@qq.com
 * @Date: 2024-02-23 08:05:39
 * @LastEditors: Loritas 2223292817@qq.com
 * @LastEditTime: 2024-02-23 13:42:03
 * @FilePath: \nextjs-dashboard\app\layout.tsx
 * @Description: 
 * Copyright (c) 2024 by Loritas, All Rights Reserved. 
 */
// 根布局，在顶层导入全局css
import "@/app/ui/global.css"
// 导入添加的字体
import { inter } from "@/app/ui/fonts"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
