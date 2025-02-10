export default function CustomHeading({ children }: any) {
  return (
    <h2
      style={{ letterSpacing: "0" }}
      role="heading"
      className="text-[55px] text-balance font-normal whitespace-normal leading-none tracking-normal text-left capitalize"
    >
      {children}
    </h2>
  );
}
