import { Button, Link, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { ThemeSwitcher } from "./components/theme-switcher";

export default function Home() {
  return (
    <div id="page-content" className="h-full flex flex-col">
      <Navbar maxWidth="2xl" isBordered isBlurred={false}>
        <NavbarBrand>
          <p className="text-3xl font-bold text-primary">ريتاليست</p>
        </NavbarBrand>
        <NavbarContent justify="end">
          <ThemeSwitcher props={{ isIconOnly: true, variant: "light", color: "primary" }} />
          <Link href="/login">
            <Button variant="light" color="primary">
              <FontAwesomeIcon icon={faRightToBracket} size="xl" /> دخول
            </Button>
          </Link>
          <Link href="/store">
            <Button variant="light" color="primary">
              <FontAwesomeIcon icon={faStore} size="xl" /> المتجر
            </Button>
          </Link>
        </NavbarContent>
      </Navbar>
      <main className="grow px-24 py-4">
        <p>
          خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني
          الكلاسيكي منذ العام 45 قبل الميلاد، مما يجعله أكثر من 2000 عام في القدم. قام البروفيسور
          "ريتشارد ماك لينتوك" (Richard McClintock) وهو بروفيسور اللغة اللاتينية في جامعة
          هامبدن-سيدني في فيرجينيا بالبحث عن أصول كلمة لاتينية غامضة في نص لوريم إيبسوم وهي
          "consectetur"، وخلال تتبعه لهذه الكلمة في الأدب اللاتيني اكتشف المصدر الغير قابل للشك.
          فلقد اتضح أن كلمات نص لوريم إيبسوم تأتي من الأقسام 1.10.32 و 1.10.33 من كتاب "حول أقاصي
          الخير والشر" (de Finibus Bonorum et Malorum) للمفكر شيشيرون (Cicero) والذي كتبه في عام 45
          قبل الميلاد. هذا الكتاب هو بمثابة مقالة علمية مطولة في نظرية الأخلاق، وكان له شعبية كبيرة
          في عصر النهضة. السطر الأول من لوريم إيبسوم "Lorem ipsum dolor sit amet.." يأتي من سطر في
          القسم 1.20.32 من هذا الكتاب.
        </p>
      </main>
    </div>
  );
}
