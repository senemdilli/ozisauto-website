import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ozis Auto",
  description: "Connect with the Ozis Auto team for demos, partnership inquiries, or technical support.",
};

const offices = [
  {
    title: "Fabrika",
    phone: "+90 380 514 74 59 - 514 14 49",
    fax: "+90 380 512 18 20",
    address: "Hürriyet Cad. No 17 Yenimahalle / DÜZCE",
  },
  {
    title: "Pazarlama ve Satış Ofisi",
    phone: "+90 216 471 10 14 - 471 10 15",
    fax: "+90 216 471 10 16",
    adress: "Mimar Sinan Mah. Yedpa Ticaret Merkezi D Cad. No: 148 Ataşehir / İSTANBUL",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 pt-20 sm:gap-12 sm:px-6 sm:pb-24 sm:pt-24 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-8">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <h2 className="text-2xl font-semibold text-slate-900">İletişim Bilgileri</h2>
            <p className="mt-4 text-base text-slate-600">
              Çözümlerimiz hakkında daha fazla bilgi edinmek veya özel ihtiyaçlarınızı tartışmak için bizimle iletişime geçin.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {offices.map((office) => (
              <div key={office.title} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <h3 className="text-lg font-semibold text-slate-900">{office.title}</h3>
                <dl className="mt-4 space-y-3 text-sm text-slate-600">
                  <div>
                    <dt className="font-semibold text-slate-500">Telefon</dt>
                    <dd className="mt-1 text-base text-slate-900">{office.phone}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-500">Fax</dt>
                    <dd className="mt-1 text-base text-slate-900">{office.fax}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
        <div className="self-start rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <h2 className="text-2xl font-semibold text-slate-900">Bize Ulaşın</h2>
          {/* <p className="mt-4 text-base text-slate-600">
            Fill in the essentials and we&apos;ll line up the right experts before our first call.
          </p> */}
          <form className="mt-8 space-y-6" action="#" method="post">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-600">
                  Ad Soyad
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                  placeholder="Demiralp Özdemir"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-600">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                  placeholder="demiralp@gmail.com"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-slate-600">
                Telefon
              </label>
              <input
                id="phone"
                name="phone"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                placeholder="+90 530 123 45 67"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-600">
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                placeholder="Taleplerinizi bizimle paylaşın..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Gönder
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
