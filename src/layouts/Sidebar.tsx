import { Clapperboard, Home, Library, Repeat } from "lucide-react";
import { buttonStyles } from "../components/Button";
import { twMerge } from "tailwind-merge";
import { Children, ReactNode } from "react";

function Sidebar() {
  return (
    <>
      <aside className="sticky top-0 overflow-y-auto scrollbar-hidden p-4 flex flex-col ml-1 lg:hidden">
        <SmallSidebarItem Icon={Home} title="Home" url="/" />
        <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts" />
        <SmallSidebarItem
          Icon={Clapperboard}
          title="Subscriptions"
          url="/subscriptions"
        />
        <SmallSidebarItem Icon={Library} title="Library" url="/library" />
      </aside>
      <aside className="w-56 hidden lg:sticky absolute top-0 overflow-x-auto scrollbar-hidden pb-4 lg:flex flex-col gap-2 px-2">
        <LargeSidebarSection>
          <LargeSidbarItem isActive Icon={Home} title="Home" url="/" />
 
        </LargeSidebarSection>
      </aside>
    </>
  );
}
export default Sidebar;

type SmallSideBarItemProps = {
  Icon: React.ElementType;
  title: string;
  url: string;
};
function SmallSidebarItem({ Icon, title, url }: SmallSideBarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "py-4 px-1 flex flex-col items-center rounded-lg gap-1"
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
}

type LargeSidebarSectionProps = {
  children: ReactNode;
  title?: string;
  visibleItemCount?: number;
};
function LargeSidebarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSidebarSectionProps) {
  const childrenArry = Children.toArray(children).flat();
  const visibleChildren = childrenArry.slice(0, visibleItemCount);
  return <div>{visibleChildren}</div>;
}

type LargeSideBarItemProps = {
  Icon: React.ElementType;
  title: string;
  url: string;
  isActive?: boolean;
};

function LargeSidbarItem({
  Icon,
  title,
  url,
  isActive = false,
}: LargeSideBarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `w-full flex items-center rounded-lg gap-4 p-3 ${
          isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined
        }`
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </a>
  );
}
