export default function Header({title} : any) {
  return (
    <h2 className="flex items-end font-semibold text-4xl my-10">
     {title}<p className="text-purple-500">.</p>
    </h2>
  );
}
