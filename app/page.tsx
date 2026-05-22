import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DO NOT RENT. OWN. | KAPWA OFW',
  description: 'He\'s rich because we rent. We\'re poor because we don\'t own. KAH-YAH-WON',
}

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-none tracking-tighter">
          DO NOT RENT.<br/>OWN.
        </h1>
        
        <div className="space-y-4 text-lg md:text-xl text-neutral-300 leading-relaxed">
          <p><span className="text-white font-bold">10:50PM:</span> FB buried my comment.</p>
          <p><span className="text-white font-bold">1:20AM:</span> I printed +43.19% net.</p>
          <p><span className="text-white font-bold">Today:</span> +2.47244% while throttled.</p>
          <p><span className="text-white font-bold">RGTI:</span> +30.57% before Trump's $2B quantum play.</p>
          
          <div className="py-6 border-y border-neutral-800 my-8">
            <p><span className="text-white font-bold">Zuck:</span> $252B. 7.2x OFW remittances.</p>
            <p><span className="text-white font-bold">Elon:</span> 85.1% voting. Can't be fired.</p>
            <p><span className="text-white font-bold">OFWs:</span> $38.34B/year. 8.3% of GDP. 0% ownership.</p>
          </div>

          <p className="text-2xl font-bold text-white">He's rich because we rent. We're poor because we don't own.</p>
          
          <p className="text-3xl font-black text-yellow-400 pt-4">KAH-YAH-WON</p>
          
          <div className="pt-8 space-y-3 text-white">
            <p>Do not rent time. <span className="font-bold">Own assets.</span></p>
            <p>Do not rent reach. <span className="font-bold">Own inboxes.</span></p>
            <p>Do not rent seats. <span className="font-bold">Own the car.</span></p>
          </div>

          <p className="pt-8 text-xl font-bold">$38B/year buying ownership = Philippines owns Philippines.</p>
          
          <p className="pt-12 text-sm text-neutral-500">
            None are financial advice. Education lang. B*TCH! 😂🤝🇵🇭
          </p>
        </div>
      </div>
    </main>
  )
}
