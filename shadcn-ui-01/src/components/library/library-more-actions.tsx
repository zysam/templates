import { Edit, MoreHorizontal, Trash } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { SidebarMenuAction, useSidebar } from '@/components/ui/sidebar';
import { LibraryItem, useLibraryStore } from '@/stores/use-library-store';

// import { Button } from '../ui/button';

export function LibraryMoreActions({ item }: { item: LibraryItem }) {
  const { removeLibrary } = useLibraryStore();
  const { isMobile } = useSidebar();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuAction showOnHover>
          <MoreHorizontal />
          <span className="sr-only">More</span>
        </SidebarMenuAction>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-[4rem] rounded-lg"
        side={isMobile ? 'bottom' : 'right'}
        align={isMobile ? 'end' : 'start'}
      >
        <DropdownMenuItem>
          <Edit />
          <span>Edit</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => removeLibrary(item.id)}>
          <Trash />
          <span>Delete</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
