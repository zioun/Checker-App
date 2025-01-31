import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { IoSearch } from "react-icons/io5";


export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center -space-x-8">
      <Input type="text" placeholder="Input here.." />
      
      <Button className="bg-blue-900 hover:bg-red-500 rounded-full"  type="submit">
        <IoSearch /> Search
      </Button>
      
    </div>
  );
}
