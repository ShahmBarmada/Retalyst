"use client";

import { Tabs, Tab, Card, CardBody, Button, Input, Checkbox, Image } from "@nextui-org/react";
// import NextImage from "next/image";

export default function Login() {
  return (
    <div id="page-content" className="flex flex-col">
      <div className="rounded-xl bg-default-100 flex shadow-2xl mx-auto mt-40">
        <div className="flex flex-col gap-y-4 items-center p-2 pt-20">
          {/* rounded-s-xl overflow-hidden relative */}
          {/* <Image as={NextImage} alt="background image" src="/background.png" width={640} height={640} className="blur-[2px]" /> */}
          {/* <div className="absolute top-0 start-0 z-20 flex flex-col gap-y-4 w-full h-full justify-center items-center"> */}
          <p className="font-bold text-8xl">ريتاليست</p>
          <p className="font-semibold text-3xl">كل ما يحتاجه منزلك.</p>
          {/* </div> */}
        </div>
        <div className="p-2 flex flex-col min-w-72">
          <Tabs fullWidth variant="underlined" color="primary">
            <Tab key="login" title="تسجيل دخول" className="flex flex-col justify-stretch grow">
              <Card>
                <CardBody>
                  <form className="flex flex-col gap-y-4">
                    <Input isRequired label="رقم الهاتف" />
                    <Input isRequired label="كلمة السر" type="password" />
                    <Checkbox color="primary">&ensp;حفظ بيانات الدخول</Checkbox>
                    <Button isDisabled color="primary" className="mx-auto">
                      دخول
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="signup" title="انشاء حساب" className="flex flex-col justify-stretch grow">
              <Card>
                <CardBody>
                  <form className="flex flex-col gap-y-4">
                    <Input isRequired label="الاسم" />
                    <Input isRequired label="رقم الهاتف" />
                    <Input isRequired label="كلمة السر" type="password" />
                    <Input isRequired label="تأكيد كلمة السر" type="password" />
                    <Button isDisabled color="primary" className="mx-auto">
                      إنشاء حساب
                    </Button>
                  </form>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
