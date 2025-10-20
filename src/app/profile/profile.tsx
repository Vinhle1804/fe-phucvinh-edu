import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { PersonStanding } from "lucide-react";

export default function Profile() {
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <button className="text-black rounded-2xl items-center hover:text-gray-600 p-2">
                <PersonStanding />
              </button>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Linksadasda</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
