'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { useModal } from '@/hooks/use-modal-store';

export const InviteModal = () => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === 'invite';

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Ваш сервер
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Придайте своему серверу индивидуальность с помощью имени и
            изображения. Вы всегда можете изменить это позже.
          </DialogDescription>
        </DialogHeader>
        Режим приглашения!
      </DialogContent>
    </Dialog>
  );
};
