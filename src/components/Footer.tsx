
import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = {
    services: [
      { name: "DiscoveryStack®", href: "#discovery-stack" },
      { name: "Start Your Discovery", href: "/start-discovery" },
      { name: "Services", href: "#services" },
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "News & Videos", href: "/news-videos" },
      { name: "Projects", href: "/projects" },
      { name: "AI Alex", href: "/ai-alex" },
      { name: "Project Builder", href: "/project-builder" },
      { name: "Contact", href: "#contact" },
    ],
    connect: [
      { name: "LinkedIn", href: "#linkedin" },
      { name: "Legal", href: "#legal" },
    ],
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
              FlawlessCX
            </Link>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Services</h3>
               <nav className="flex flex-col space-y-2">
                {footerSections.services.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <nav className="flex flex-col space-y-2">
                {footerSections.company.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Connect</h3>
              <nav className="flex flex-col space-y-2">
                {footerSections.connect.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center space-y-2">
          <p className="text-muted-foreground font-medium">
            FlawlessCX - Strategic UX & Product Design Consultancy
          </p>
          <p className="text-muted-foreground">
            © 2025 FlawlessCX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
