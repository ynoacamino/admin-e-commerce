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
        href: '/calendar',
        Icon: HamburgerMenuIcon,
      },
      {
        name: 'Categorias',
        href: '/calendar',
        Icon: ArchiveIcon,
      },
      {
        name: 'Marcas',
        href: '/',
        Icon: CommitIcon,
      },
      {
        name: 'Tags',
        href: '/calendar',
        Icon: Link2Icon,
      },
    ],
  },
  {
    title: 'Procesos',
    options: [
      {
        name: 'Dashboard',
        href: '/',
        Icon: DesktopIcon,
      },
      {
        name: 'Ventas',
        href: '/calendar',
        Icon: CheckIcon,
      },
      {
        name: 'Usuarios',
        href: '/calendar',
        Icon: AvatarIcon,
      },
    ],
  },
];
