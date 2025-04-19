import Image from "next/image";

type TSkill = {
  image: string;
  name: string;
};
export default function Skill({ image, name }: TSkill) {
  return (
    <div className="bg-[#1E1E1E] h-24 flex flex-col items-center justify-center gap-2 p-2 rounded-lg">
      <Image className="w-10 h-7 object-contain" width={100} height={100} src={image} alt={name} />
      <h3 className="text-slate-400 text-sm">{name}</h3>
    </div>
  );
}
