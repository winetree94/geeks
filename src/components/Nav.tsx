'use client';
import { RiAccountCircleLine, RiAddBoxLine, RiGroupLine, RiHomeLine, RiNotificationLine } from "@remixicon/react";
import { usePathname } from "next/navigation";

const tabs = [
  {
    name: 'Home',
    href: '/home',
    icon: <RiHomeLine />,
  },
  {
    name: 'People',
    href: '/people',
    icon: <RiGroupLine />,
  },
  {
    name: 'Add',
    href: '#',
    icon: <RiAddBoxLine />,
  },
  {
    name: 'Notifications',
    href: '/notifications',
    icon: <RiNotificationLine />,
  },
  {
    name: 'Account',
    href: '/account',
    icon: <RiAccountCircleLine />,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function Nav({
}: Readonly<{
}>) {
  const pathname = usePathname();
  return (
    <div className="sticky bottom-0 left-0 w-full h-14 flex justify-center z-30 bg-white">
      <div className="max-w-lg">
        <div className="block">
          <div className="border-b border-gray-200">
            <nav aria-label="Tabs" className="-mb-px flex justify-center space-x-8">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  aria-current={pathname.startsWith(tab.href) ? 'page' : undefined}
                  className={classNames(
                    pathname.startsWith(tab.href)
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'whitespace-nowrap border-b-2 text-xs font-medium flex-1 flex flex-col justify-center items-center overflow-hidden text-ellipsis',
                  )}
                >
                  {tab.icon}
                  <span className="text-xs mt-2">{tab.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
