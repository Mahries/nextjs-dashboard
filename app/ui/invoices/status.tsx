/*
 * @Author: Loritas 2223292817@qq.com
 * @Date: 2024-02-23 08:05:39
 * @LastEditors: Loritas 2223292817@qq.com
 * @LastEditTime: 2024-02-23 13:27:18
 * @FilePath: \nextjs-dashboard\app\ui\invoices\status.tsx
 * @Description: 
 * Copyright (c) 2024 by Loritas, All Rights Reserved. 
 */
import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
// clsx是一个库，可以用来方便地切换类名
import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  // clsx示例
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
      {status === 'pending' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
