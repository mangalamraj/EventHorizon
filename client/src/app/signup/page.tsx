import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const login = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Signup</CardTitle>
          <CardDescription>Create your new account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Name">Name</Label>
                <Input id="name" placeholder="Johne Doe" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="Username">Username</Label>
                <Input id="username" placeholder="johneDoe@gmail.com" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex gap-2 flex-col">
          <Button className="w-full">Signup</Button>
          <div className="w-full text-left">
            Have an account?
            <Link href="/login" className="text-blue-500">
              {" "}
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
export default login;
