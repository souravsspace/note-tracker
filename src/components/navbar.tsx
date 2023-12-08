"use client";

import { ModeToggle } from "@/components/theme/mode-toggle";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <nav>
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="text-2xl font-bold">Note</span>{" "}
            <span className="font-light">Tracker</span>
          </Link>

          <div className="flex items-center">
            {status === "authenticated" && session != null ? (
              <Button variant="outline" onClick={() => signOut()}>
                Logout
              </Button>
            ) : (
              <Button variant="outline" onClick={() => signIn()}>
                Login
              </Button>
            )}

            <div className="ml-3 sm:ml-5">
              <ModeToggle />
            </div>
          </div>
        </div>
      </Container>
      <div className="mx-3 sm:mx-6">
        <hr className="my-3" />
      </div>
    </nav>
  );
}
