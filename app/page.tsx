import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* ← THIS IS YOUR NEW TITLE – PERFECTLY PLACED */}
      <h1 className="text-4xl font-bold mb-8 text-blue-700">
        DocuBot – Buffalo Privacy AI (Logistics & Healthcare)
      </h1>
      
      {/* Optional subtitle for extra wow */}
      <p className="text-lg text-gray-600 mb-6">
        Drag any customs invoice or FDA form → AI fixes errors 100% locally
      </p>
      
      <ChatWindow 
        placeholder="Drag a PDF above or ask me to check HS codes, missing fields, FDA compliance..."
      />
    </div>
  );
}
