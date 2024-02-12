import Menu from '@/components/ui/menu';
import { menuOptions } from '@/components/initialPage/menuOptions';

export default function LateralBar() {
  return (
    <div className="w-full max-w-[14rem] flex flex-col gap-4 border-r-[1px] border-border py-6">
      {
      menuOptions.map(({
        title, options,
      }) => (
        <Menu key={title} title={title} options={options} />
      ))
    }
    </div>
  );
}
