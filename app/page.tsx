import { ChatWindow } from "@/components/ChatWindow";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white px-4 py-12">
      {/* MAIN TITLE – YOUR OFFICIAL BRAND */}
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-800 text-center leading-tight">
        DocuBOT – 716 Logistics Edition
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-700 mb-8 text-center max-w-4xl px-4">
        <strong>Buffalo's Privacy-First AI</strong> for Cross-Border Freight & Healthcare<br />
        Drag any customs invoice, bill of lading, FDA form, or regulatory PDF below → 
        AI finds & fixes errors in seconds<br />
        <span className="text-green-600 font-bold">100% local • Zero uploads • Nothing leaves your PC</span>
      </p>

      {/* SUBTITLE CALL TO ACTION */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-5xl w-full border-4 border-blue-200">
        <ChatWindow 
          placeholder="🛡️ Drag your sensitive PDF anywhere on this page (or paste text) → Ask me: 'Check HS codes', 'Fix FDA gaps', 'Find missing fields', or 'Customs compliance risks'"
        />
      </div>

      {/* FOOTER – MAKES IT LOOK LIKE A REAL COMPANY */}
      <footer className="mt-16 text-center text-sm text-gray-500">
        <p>Built exclusively for Buffalo's border businesses | ESSA Freight • Larkin Express • Empire Genomics • Hemogenyx</p>
        <p className="mt-2">Zero data risk • Free trial • Runs offline after first load</p>
        <p className="mt-4 font-bold text-blue-700">Contact: krypticnodes@gmail.com • Serving WNY since 2025</p>
      </footer>
    </div>
  );
}
