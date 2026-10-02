import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="page-section">
      <div className="container">
        <div className="page-heading">
          <p>404</p>
          <h1>Page not found</h1>
          <p>
            The requested page does not exist or is not included in the current
            static build.
          </p>
        </div>

        <Link href="/">Return to the home page</Link>
      </div>
    </section>
  );
}