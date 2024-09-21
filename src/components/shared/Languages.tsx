export default function Languages({ image, name }: any) {
  return (
    <div className="flex items-center gap-2 whitespace-nowrap">
      <img className="w-5" src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}
