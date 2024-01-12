import Nav from "../_components/_nav/Nav";
import TopNav from "../_components/_topNav/TopNav";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}

      <TopNav />
      <div className="flex ">
        <Nav />
        {children}
      </div>
    </section>
  );
}
