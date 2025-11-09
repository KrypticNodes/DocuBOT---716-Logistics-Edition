import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white px-4">
      {/* BIG TITLE – YOUR BRAND */}
      <h1 className="text-5xl font-bold mb-4 text-blue-800 text-center">
        DocuBot – Buffalo Privacy AI
      </h1>
      <p className="text-xl text-gray-700 mb-8 text-center max-w-2xl">
        Logistics & Healthcare Edition<br />
        Drag any customs invoice, FDA form, or regulatory PDF → AI fixes errors in seconds<br />
        <strong className="text-green-600">100% local • No uploads • Nothing leaves your computer</strong>
      </p>

      {/* THE CHATBOT */}
      <div className="w-full max-w-4xl">
        <ChatWindow 
          placeholder="Drag a PDF anywhere on this page or paste text... Ask me to check HS codes, missing fields, FDA compliance, or customs errors!"
        />
      </div>

      {/* FOOTER */}
      <footer className="mt-12 text-sm text-gray-500">
        Built for Buffalo's border businesses • Zero data risk • Free trial
      </footer>
    </div>
  );
}
