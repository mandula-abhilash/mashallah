export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4 text-center">
        <p>
          © {new Date().getFullYear()} Mashallah Mutton Center - Premium Quality
          Halal Meat
        </p>
        <p className="text-sm mt-2">Designed with ♥ by VISDAK</p>
      </div>
    </footer>
  );
}
