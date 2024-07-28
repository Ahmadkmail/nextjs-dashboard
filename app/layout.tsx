
import '@/app/ui/global.css'
/**
 * RootLayout is the root layout component for the entire application.
 * It wraps the children with the HTML and BODY tags.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The children to be rendered.
 * @return {JSX.Element} The root layout component.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  // Render the children wrapped in the HTML and BODY tags.
  return (
    <html lang="en">
      {/* The BODY tag contains the children to be rendered. */}
      <body>{children}</body>
    </html>
  );
}
