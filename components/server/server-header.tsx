'use client';

import { ServerWithMembersWithProfiles } from '@/types';
import { MemberRole } from '@prisma/client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  ChevronDown,
  LogOut,
  PlusCircle,
  Settings,
  Trash,
  UserPlus,
  Users,
} from 'lucide-react';

interface ServerHeaderProps {
  server: ServerWithMembersWithProfiles;
  role?: MemberRole;
}

export const ServerHeader = ({ server, role }: ServerHeaderProps) => {
  const isAdmin = role === MemberRole.ADMIN;
  const isModerator = isAdmin || role === MemberRole.MODERATOR;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none" asChild>
        <button className="w-full font-semibold px-3 flex text-lg  justify-center    items-center h-12  border-neutral-200 dark:border-neutral-800 border-b-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition">
          <p className="ml-auto"> {server.name}</p>
          <ChevronDown className="h-5 w-5 ml-auto" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px]">
        {isModerator && (
          <DropdownMenuItem className="text-indigo-600 dark:text-indigo-400 px-3 py-2 text-sm cursor-pointer ">
            Приглашайте друзей
            <UserPlus className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuItem className=" px-3 py-2 text-sm cursor-pointer ">
            Настройка сервера
            <Settings className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer ">
            Управление участниками
            <Users className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
        {isModerator && (
          <DropdownMenuItem className="px-3 py-2 text-sm cursor-pointer ">
            Создать канал
            <PlusCircle className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
        {isAdmin && (
          <DropdownMenuItem className="text-rose-500 px-3 py-2 text-sm cursor-pointer ">
            Удалить сервер
            <Trash className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
        {!isAdmin && (
          <DropdownMenuItem className="text-rose-500 px-3 py-2 text-sm cursor-pointer ">
            Выйти с сервера
            <LogOut className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
        {isModerator && <DropdownMenuSeparator />}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
