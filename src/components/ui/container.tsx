import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <main className={cn("mx-auto max-w-7xl p-2", className)}>{children}</main>
  );
}
