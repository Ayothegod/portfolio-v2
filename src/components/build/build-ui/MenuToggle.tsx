import { Button } from "@/components/ui/button";
// src\icons\icons\More - Outline.svg
import svg from "../../../icons/icons/More - Outline.svg"

export function MenuToggle() {
  return (
    <div>

    <Button variant="ghost">
    {/* <Icon name="icons/More - Outline" class="text-2xl" /> */}
    <img src="src\icons\icons\More - Outline.svg" alt="alt text" className=" stroke-black fill-black text-black bg" />
    <img src={`${svg}`} alt="alt text" />
    
  </Button>
    </div>
  )
}
