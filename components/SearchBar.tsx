import { Search } from "lucide-react";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <div className="relative flex max-w-[200px] items-center">
      <Input type="text" placeholder="Search" className="pl-10" />
      <Search
        className="absolute left-[11px] text-muted-foreground"
        strokeWidth={1}
        width={20}
      />
    </div>
  );
};

export default SearchBar;
