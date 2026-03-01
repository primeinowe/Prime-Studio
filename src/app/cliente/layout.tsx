export default function ClienteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-blue-500">
            Área do Cliente
          </h1>
          <p className="text-white/60 mt-2">
            Gerencie seus produtos, downloads e licenças.
          </p>
        </div>

        {children}
      </div>
    </div>
  )
}