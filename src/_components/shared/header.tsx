import MotionContainer from "./motion-container";
export default function Header({ title }: {title: string}) {
  return (
    <MotionContainer>
      <h2 className="px-4 flex items-end font-semibold text-white text-4xl my-5">
        {title}
        <p className="text-purple-500">.</p>
      </h2>
    </MotionContainer>
  );
}
