export default function SocialLinks({ children, link, tooltip }: any) {
  return (
    <a href={link} data-tip={tooltip} className="tooltip cursor-pointer hover:scale-[1.1] text-slate-500 hover:text-purple-400 transition-all">
      {children}
    </a>
  );
}
