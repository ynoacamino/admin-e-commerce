import { OptionMenu } from '@/components/ui/menu';
import {
  HamburgerMenuIcon, AvatarIcon, CheckIcon, DesktopIcon, Link2Icon, CommitIcon, ArchiveIcon,
} from '@radix-ui/react-icons';

export const menuOptions: { title: string, options: OptionMenu[] }[] = [
  {
    title: 'Tienda Online',
    options: [
      {
        name: 'Productos',
        href: '/productos',
        Icon: HamburgerMenuIcon,
      },
      {
        name: 'Categorias',
        href: '/categorias',
        Icon: ArchiveIcon,
      },
      {
        name: 'Marcas',
        href: '/marcas',
        Icon: CommitIcon,
      },
      {
        name: 'Tags',
        href: '/tags',
        Icon: Link2Icon,
      },
    ],
  },
  {
    title: 'Procesos',
    options: [
      {
        name: 'Dashboard',
        href: '/dashboard',
        Icon: DesktopIcon,
      },
      {
        name: 'Ventas',
        href: '/ventas',
        Icon: CheckIcon,
      },
      {
        name: 'Usuarios',
        href: '/usuarios',
        Icon: AvatarIcon,
      },
    ],
  },
];
