export default function SectionDivider({ title }) {
  return (
    <div className="my-16 flex flex-col items-center">

      {title && (
        <p className="font-display text-[--color-textsub] tracking-[0.3em] text-xs uppercase mb-3">
          {title}
        </p>
      )}

      <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#7EC8E3] to-transparent opacity-60 relative overflow-hidden">

        <div className="absolute top-0 left-0 w-16 h-[1px] bg-[#7EC8E3] blur-sm animate-slide"></div>

      </div>

    </div>
  );
}