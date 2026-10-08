const tool = (name, icon, note) => ({ name, icon: `/images/tech-stack/${icon}`, note });

export const technologyStacks = [
  {
    title: "Web interfaces",
    summary: "Customer and staff experiences",
    tools: [tool("React", "react.svg"), tool("Next.js", "next-js.svg"), tool("JavaScript", "javascript.svg"), tool("TypeScript", "typescript.svg"), tool("Tailwind CSS", "tailwind-css.svg")],
  },
  {
    title: "Backend & programming",
    summary: "Server-side tools and programming languages",
    tools: [tool("Node.js", "node-js.svg"), tool("Express", "express.svg"), tool("Go", "go.svg"), tool("PHP", "php.svg"), tool("Laravel", "laravel.svg"), tool("Symfony", "symfony.svg"), tool("Django", "django.svg"), tool("C++", "c.svg")],
  },
  {
    title: "Databases & data",
    summary: "Business records and information",
    tools: [tool("PostgreSQL", "postgresql.svg"), tool("MySQL", "mysql.svg"), tool("MariaDB", "mariadb.svg"), tool("MongoDB", "mongodb.svg"), tool("Redis", "redis.svg"), tool("Prisma", "prisma.svg", "Afaq MMS plan")],
  },
  {
    title: "Mobile platforms",
    summary: "Apps for phones and tablets",
    tools: [tool("Flutter", "flutter.svg"), tool("Dart", "dart.svg"), tool("Android", "android.svg"), tool("iOS", "ios.svg")],
  },
  {
    title: "Infrastructure & deployment",
    summary: "Servers, hosting and delivery workflows",
    tools: [tool("Linux", "linux.svg"), tool("Nginx", "nginx.svg"), tool("Git", "git.svg"), tool("GitHub", "github.svg"), tool("Bash", "bash.svg"), tool("DigitalOcean VPS", "digitalocean-vps.svg"), tool("Cloudflare", "cloudflare.svg")],
    supportTitle: "Operations support includes",
    support: ["Linux server administration", "Systemd services", "Firewall and access controls", "Backups and monitoring"],
  },
  {
    title: "Cybersecurity & hardening",
    summary: "Tools and methods for authorized security assessment",
    tools: [tool("Burp Suite", "burp-suite.svg"), tool("Metasploit", "metasploit.svg"), tool("Wireshark", "wireshark.svg"), tool("OWASP ZAP", "owasp-zap.svg"), tool("Hashcat", "hashcat.svg"), tool("Nmap", "nmap-logo.svg"), tool("sqlmap", "sqlmap-tarsier.png")],
    otherTools: [
      { name: "Hydra", description: "Login security auditing" },
      { name: "John the Ripper", description: "Password security auditing" },
      { name: "Aircrack-ng", description: "Wireless security auditing" },
      { name: "Gobuster", description: "Directory and subdomain discovery" },
    ],
    resources: [tool("Kali Linux", "kali-linux.svg", "Security testing distribution"), tool("OWASP Top 10", "owasp-top-10.svg", "Web security guidance")],
    supportTitle: "Authorized security work includes",
    support: ["Reconnaissance within an approved scope", "Vulnerability assessment", "Web application security testing", "Authentication and access control review", "Linux and server configuration hardening", "Clear findings and remediation guidance"],
  },
];
