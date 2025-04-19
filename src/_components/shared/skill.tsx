export default function Skill({ image, name }: any) {
  return (
    <div className="bg-[#1E1E1E] h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg">
      <img className="w-10 h-7 object-contain" src={image} alt={name} />
      <h3 className="text-slate-400 text-sm">{name}</h3>
    </div>
  );
}
