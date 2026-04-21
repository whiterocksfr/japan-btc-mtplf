interface CalloutProps {
  children: React.ReactNode;
}

export function Callout({ children }: CalloutProps) {
  return (
    <blockquote className="my-8 border-l-2 border-accent pl-6 text-lg leading-relaxed text-ink-600 font-serif italic">
      {children}
    </blockquote>
  );
}
