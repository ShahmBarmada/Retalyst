"use client";

import {
  Button,
  Card,
  CardBody,
  Listbox,
  ListboxItem,
  ListboxSection,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { ThemeSwitcher } from "../components/theme-switcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faChartSimple,
  faUserTie,
  faAddressBook,
  faMotorcycle,
  faMapLocationDot,
  faFileInvoice,
  faCubes,
  faLayerGroup,
  faListCheck,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    { title: "ملخص", href: "/dashboard", icon: faChartSimple },
    { title: "اوردرات", href: "/dashboard/orders", icon: faListCheck },
    { title: "منتجات", href: "/dashboard/products", icon: faCubes },
    { title: "تصنيفات", href: "/dashboard/categories", icon: faLayerGroup },
    { title: "عملاء", href: "/dashboard/clients", icon: faAddressBook },
    { title: "مناطق", href: "/dashboard/areas", icon: faMapLocationDot },
    { title: "خطوط التوصيل", href: "/dashboard/routes", icon: faRoute },
    { title: "مندوبين", href: "/dashboard/delivery-reps", icon: faMotorcycle },
    { title: "موظفين", href: "/dashboard/employees", icon: faUserTie },
    { title: "تقارير", href: "/dashboard/reports", icon: faFileInvoice },
  ];
  const currentPath = usePathname();

  return (
    <div id="grid-layout">
      <header className="bg-zinc-200 dark:bg-zinc-600 flex justify-between items-center border-b border-zinc-400">
        <div className="ps-6 flex place-content-center">
          <p className="font-bold text-2xl">ريتاليست</p>
        </div>
        <div className="pe-6 flex items-center gap-x-2">
          <ThemeSwitcher props={{ isIconOnly: true, variant: "light" }} />
          <Popover placement="bottom-start">
            <PopoverTrigger>
              <Button variant="light" className="text-lg">
                التنبيهات <FontAwesomeIcon icon={faCircleExclamation} size="2xl" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-4">
              <p>يتم عرض التنبيهات هنا</p>
              <p>محتوى التنبيه الأول</p>
              <p>محتوى التنبيه الثاني</p>
              <p>محتوى التنبيه الثالث</p>
            </PopoverContent>
          </Popover>
        </div>
      </header>
      <nav className="bg-zinc-200 dark:bg-zinc-600 border-e border-zinc-400">
        <Listbox aria-label="navigation list">
          <ListboxSection showDivider>
            {navItems.map((item, index) => (
              <ListboxItem
                key={index}
                href={item.href}
                color="primary"
                startContent={<FontAwesomeIcon icon={item.icon} size="2xl" className="w-6" />}
                className={`nav-item ${
                  (item.href.length > 10 && currentPath.startsWith(item.href)) ||
                  item.href === currentPath
                    ? "text-primary"
                    : undefined
                }`}
              >
                {item.title}
              </ListboxItem>
            ))}
          </ListboxSection>
        </Listbox>
      </nav>
      <main className="bg-zinc-50 dark:bg-zinc-800">{children}</main>
    </div>
  );
}
