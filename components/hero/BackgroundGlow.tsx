export default function BackgroundGlow() {
  return (
    <>
      <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[150px]" />
      <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px]" />
    </>
  );
}