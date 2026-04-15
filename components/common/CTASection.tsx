interface CTAButton {
    label: string;
    href: string;
  }
  
  interface CTAProps {
    title: string;
    subtitle: string;
    bgImage?: string;
    primaryBtn?: CTAButton;
    secondaryBtn?: CTAButton;
  }
  
  export default function CTASection({
    title,
    subtitle,
    bgImage = "/images/life/campus.png",
    primaryBtn,
    secondaryBtn,
  }: CTAProps) {
    return (
      <section className="relative overflow-hidden rounded-3xl bg-primary text-white p-6 sm:p-8 md:p-10 text-center mt-5 mb-5">
  
        {/* Background */}
        <div
          className="absolute inset-0 opacity-10 bg-cover"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
  
        {/* Content */}
        <div className="relative space-y-4">
  
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
            {title}
          </h3>
  
          <p className="text-xs sm:text-sm md:text-base opacity-90 max-w-xl mx-auto">
            {subtitle}
          </p>
  
          {/* 🔥 BUTTONS */}
          {(primaryBtn || secondaryBtn) && (
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
  
              {primaryBtn && (
                <a
                  href={primaryBtn.href}
                  className="px-4 py-2 bg-white text-primary rounded-lg text-sm font-medium hover:bg-gray-100 transition"
                >
                  {primaryBtn.label}
                </a>
              )}
  
              {secondaryBtn && (
                <a
                  href={secondaryBtn.href}
                  className="px-4 py-2 border border-white text-white rounded-lg text-sm font-medium hover:bg-white/10 transition"
                >
                  {secondaryBtn.label}
                </a>
              )}
  
            </div>
          )}
  
        </div>
      </section>
    );
  }