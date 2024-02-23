/*
 * @Author: Loritas 2223292817@qq.com
 * @Date: 2024-02-23 13:30:27
 * @LastEditors: Loritas 2223292817@qq.com
 * @LastEditTime: 2024-02-23 13:45:01
 * @FilePath: \nextjs-dashboard\app\ui\fonts.ts
 * @Description: 
 * Copyright (c) 2024 by Loritas, All Rights Reserved. 
 */
// 体验NextJs的自动字体优化和添加字体
import { Inter, Lusitana } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({ 
    weight: ['400', '700'],
    subsets: ['latin'] 
});