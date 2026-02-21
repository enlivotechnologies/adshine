import Image from "next/image";

export default function FounderMessage() {
  return (
    <section className="bg-[#f8f8f9] py-20 lg:py-28 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          
          {/* Left — Photo with smooth zoom effect */}
          <div className="relative rounded-[32px] overflow-hidden h-[540px] lg:h-[620px] group shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] bg-black">
            <Image
              src="https://cjlpsqzjtchvpckpyllb.supabase.co/storage/v1/object/public/sentia/logo.png"
              alt="Founder of Adshine Pharmaceuticals"
              fill
              unoptimized
              className="object-cover object-top"
            />
            {/* Bottom gradient for name plate */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-700 opacity-90 group-hover:opacity-100" />

            {/* Name plate */}
            <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
              <p className="text-white font-medium text-[20px] lg:text-[22px] tracking-tight mb-1 drop-shadow-md">
                Adshine Pharmaceuticals
              </p>
              <p className="text-white/70 text-[14px] lg:text-[15px] font-light drop-shadow-sm">
                Founder & Managing Director
              </p>
            </div>
          </div>

          {/* Right — Quote & Details */}
          <div className="flex flex-col justify-center py-4 lg:pl-6">
            <div className="flex">
              <span className="text-[#B80004] text-[64px] lg:text-[72px] font-serif leading-none h-[40px] flex items-end">
                &ldquo;
              </span>
            </div>

            <blockquote className="text-[#1a1a1a] text-[24px] lg:text-[28px] xl:text-[32px] leading-[1.45] font-medium tracking-tight mb-8 pr-4">
              Our commitment is simple — to put clinically proven, GMP-certified medicine
              in the hands of every doctor and patient who needs it. We are not just building
              products; we are building trust.
            </blockquote>

            <p className="text-[#888888] font-light leading-[1.6] mb-10 text-[15px] lg:text-[16px]">
              Science drives us, but the belief that every life deserves better healthcare is
              what keeps us moving forward — one prescription at a time.
            </p>

            <div className="w-full h-[1px] bg-[#eaeaec] mb-10" />

            <div className="flex flex-col gap-5">
              {[
                "Physician trust and prescription confidence",
                "Transparent composition — no compromises on purity",
                "Pan-India reach across 500+ healthcare professionals",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="w-[6px] h-[6px] rounded-full bg-[#B80004] flex-shrink-0 mt-[8px]" />
                  <p className="text-[14px] lg:text-[15px] text-[#666666] font-medium leading-snug">{point}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
