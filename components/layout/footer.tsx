import { cn } from "@/lib/utils";
import { footer } from "@/styles/font";

export default function Footer() {
  return (
    <footer className={cn(footer.className, "py-3 text-center text-sm")}>
      © 2024 Pahreza Iqbal Prastowo. All Rights Reserved.
    </footer>
  );
}
