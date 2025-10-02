import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Ozis Auto",
  description:
    "Learn about the Ozis Auto mission, team, and the principles guiding our fleet innovation work.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-24">
        <div className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm lg:p-16">
          <div className="space-y-10">
            <header className="space-y-4">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
                Hakkımızda
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                ÖZ-İŞ Oto Yan Sanayii Düzce&apos;deki tesislerinde 1969 yılından bu yana Otomotiv Yan Sanayii alanında faaliyet göstermektedir. Otomotiv sektörüne hizmet veren işletmemiz, üretimimizin her aşamasında, kalite kontrol tekniklerini kullanarak, hatalı ürün sayımızı en aza indirmek ve maliyetlerimizi düşürerek tam zamanında teslimat yapabilmek için çağın en yaygın üretim metodları kullanılmaktadır. Geniş bir makine parkına sahip olan işletmemiz, Cad-Cam ve AR-GE çalışmalarıyla birlikte müşteri isteklerini en iyi şekilde karşılamaktadır.
              </p>
              <p className="text-base leading-relaxed text-slate-600">
                1998 yılında kurumsal kimliği kazanan firmamız, İstanbul YEDPA Ticaret Merkezinde bulunan Satış-Pazarlama ağımız ile araçların; iç giyimini oluşturan iç tavan kaplamaları, iç güneş siperlikleri, oto iç perdeleri, emniyet kemerleri, kapı ve bagaj toz fitilleri, iç trim yan panelleri, bagaj içi kaplamaları, bagaj içi havuzları, kaput izolatörleri, ses ve ısı yalıtım malzemeleri, iç taban halı kaplamaları gibi ürün çeşitlerimizi, iç pazara ve Dünya&apos;nın çeşitli Ülkelerine pazarlamaktadır. Üretim yelpazesini her geçen gün genişleten firmamız, Türkiye&apos;de bulunan Otomotiv Ana Sanayii&apos;ne yönelik hizmetlerini sürdürmektedir.
              </p>
            </header>
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
                  Misyonumuz
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  Çağdaş kurumsal bir iş anlayışıyla benimsenmiş, müşteri haklarına saygılı ve geleneksel değerlere bağlı kalarak kaliteli ürün üreterek, pazara sunmaktır.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
                  Vizyonumuz
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  Sektörümüzde müşterilerimize karşı sorumluluğumuzu, kaliteli hizmet anlayışımız ve teknolojik yeniliklerle birleştirerek, güvenilir ve sürdürülebilir bir marka olmaktır.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
                  Yönetim Politikamız
                </h3>
                <p className="text-base leading-relaxed text-slate-600">
                  Tüm faaliyetlerimizde amacımız; çevreye ve insan sağlına zarar vermeden müşterilimizin ürünlerimize ve hizmetlerimize karşı duydukları memnuniyetini ve güvenini sürekli arttırmaktır.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
