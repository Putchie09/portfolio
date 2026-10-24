import { SectionIcon } from "./icons";

function SectionTitle({ id, icon, children }) {
  return (
    <h2
      id={id}
      className="flex items-center gap-3 font-bold tracking-tight leading-tight text-text-primary text-[30px] sm:text-[36px]"
    >
      <SectionIcon name={icon} className="shrink-0 text-accent-light" />
      <span>{children}</span>
    </h2>
  );
}

export default SectionTitle;
