'use client';

import {
  ChevronRight,
  Folder,
  MoreHorizontal,
  type LucideIcon,
} from 'lucide-react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { useLibraryStore } from '@/stores/use-library-store';

import { LibraryActions } from './library-actions';
import { LibraryMoreActions } from './library-more-actions';

export function NavLibrary() {
  const { library } = useLibraryStore();
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="flex items-center justify-between px-2">
        <span>Library</span>
        <LibraryActions />
      </SidebarGroupLabel>

      <SidebarMenu>
        {library.map((item) => (
          <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip={item.title}>
                {/* <a href={item.url}> */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm gap-2">
                    {item.icon ? <item.icon /> : <Folder className="w-4 h-4" />}
                    <span>{item.title}</span>
                  </div>
                  <LibraryMoreActions item={item} key={item.title} />
                </div>
                {/* </a> */}
              </SidebarMenuButton>
              {item.items?.length ? (
                <>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuAction className="data-[state=open]:rotate-90">
                      <ChevronRight />
                      <span className="sr-only">Toggle</span>
                    </SidebarMenuAction>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                              <span>{subItem.title}</span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </>
              ) : null}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
