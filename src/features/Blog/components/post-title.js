export default function PostTitle({ children }) {
  return (
    <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none max-w-2xl mx-auto text-center md:text-left">
      {children}
    </h1>
  )
}
