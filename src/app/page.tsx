import Lanyard from "@/components/ui/lanyard";

export default function Home() {
  return (

    <>
      <Lanyard position={[0, 0, 40]} gravity={[0, -40, 0]} />
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>hello up-next</h1>
        
    </div>

    </>
  );
}
