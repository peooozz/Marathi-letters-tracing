import BackgroundElements from "@/components/layout/background-elements";
import AlphabetGrid from "@/components/sections/alphabet-grid";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#fef9c3]">
      <BackgroundElements />
      <div className="relative z-10 flex flex-col min-h-screen">
        <main className="flex-1">
          <AlphabetGrid />
        </main>
      </div>
    </div>
  );
}
