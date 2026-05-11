const fs = require('fs');

const contents = [
  {
    title: "Cloud Computing & Infrastructure",
    desc: "We engineer highly scalable, fault-tolerant cloud architectures designed to handle millions of concurrent users. Our team specializes in container orchestration, microservices, and multi-cloud strategies to ensure your applications remain robust and reliable under any load.",
    list: ["+ Distributed Systems", "+ Kubernetes & Docker", "+ AWS / GCP / Azure", "+ Microservices", "+ Serverless Architecture", "+ Performance Tuning"]
  },
  {
    title: "Full-Stack Software Engineering",
    desc: "Our engineering team builds enterprise-grade web and mobile applications using modern frameworks. We focus on clean architecture, high-performance rendering, and seamless user experiences tailored for scaling technology companies.",
    list: ["+ React & Next.js", "+ Node.js & TypeScript", "+ Flutter & React Native", "+ GraphQL & REST APIs", "+ Database Design", "+ System Architecture"]
  },
  {
    title: "Cybersecurity & Compliance",
    desc: "Security is built into everything we do. We provide zero-trust network architectures, advanced penetration testing, and compliance-ready infrastructure to protect your most critical assets against modern threats.",
    list: ["+ Zero-Trust Security", "+ Penetration Testing", "+ SOC2 Compliance", "+ Threat Modeling", "+ Data Encryption", "+ Identity Management"]
  },
  {
    title: "Blockchain & Web3 Development",
    desc: "We pioneer decentralized solutions with secure smart contracts, DeFi protocols, and robust blockchain nodes. Our deep understanding of cryptography ensures your Web3 applications are safe, efficient, and future-proof.",
    list: ["+ Smart Contracts", "+ Solidity & Rust", "+ DeFi Protocols", "+ Node Infrastructure", "+ Tokenomics Design", "+ Web3 Integration"]
  },
  {
    title: "DevOps & SRE",
    desc: "Accelerate your delivery with automated CI/CD pipelines, infrastructure as code, and comprehensive observability. Our Site Reliability Engineers ensure your systems are always available and recover instantly from failures.",
    list: ["+ CI/CD Pipelines", "+ Infrastructure as Code", "+ Terraform & Ansible", "+ Observability & Logging", "+ Incident Management", "+ Reliability Engineering"]
  },
  {
    title: "Advanced Research & Development",
    desc: "Pushing the boundaries of technology, our R&D lab explores AI integrations, predictive analytics, and next-generation algorithms. We translate cutting-edge research into production-ready innovations for your business.",
    list: ["+ Artificial Intelligence", "+ Machine Learning", "+ Predictive Analytics", "+ Algorithmic Optimization", "+ Prototype Development", "+ Technical Feasibility"]
  }
];

let fileContent = fs.readFileSync('src/components/service/Service1.jsx', 'utf8');

// Match everything inside <div className="animation__service_page"> ... </div>
const regex = /<div className="animation__service_page">([\s\S]*?)<\/div>\s*<\/div>/g;

let index = 0;
fileContent = fileContent.replace(regex, (match, p1) => {
  if (index >= 6) return match;
  
  const data = contents[index];
  
  const newBlock = `<div className="animation__service_page">
                        <h2 className="service__title-6">
                          ${data.title}
                        </h2>
                        <p>
                          ${data.desc}
                        </p>
                        <ul>
                          ${data.list.map(l => `<li>${l}</li>`).join('\n                          ')}
                        </ul>
                        <div className="btn_wrapper">
                          <Link
                            href="/service-details-dark"
                            className="wc-btn-secondary btn-item btn-hover"
                          >
                            <span></span>Get free
                            <br />
                            qoutes <i className="fa-solid fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>`;
                    
  index++;
  return newBlock;
});

// Also fix the link to /service-details to /service-details-dark if any remain
fileContent = fileContent.replace(/\/service-details"/g, '/service-details-dark"');

fs.writeFileSync('src/components/service/Service1.jsx', fileContent);
console.log("Updated Service1.jsx successfully!");
