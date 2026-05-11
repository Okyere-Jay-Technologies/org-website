const fs = require('fs');
let content = fs.readFileSync('src/components/service/Service1.jsx', 'utf8');

content = content.replace(/import Service11 from "\.\.\/\.\.\/\.\.\/public\/assets\/imgs\/service\/1\.jpg";/, 'import Service11 from "../../../public/assets/imgs/service/service_tech_1.png";');
content = content.replace(/import Service12 from "\.\.\/\.\.\/\.\.\/public\/assets\/imgs\/service\/2\.jpg";/, 'import Service12 from "../../../public/assets/imgs/service/service_tech_2.png";');
content = content.replace(/import Service13 from "\.\.\/\.\.\/\.\.\/public\/assets\/imgs\/service\/3\.jpg";/, 'import Service13 from "../../../public/assets/imgs/service/service_tech_3.png";');
content = content.replace(/import Service14 from "\.\.\/\.\.\/\.\.\/public\/assets\/imgs\/service\/4\.jpg";/, 'import Service14 from "../../../public/assets/imgs/service/service_tech_4.png";');
content = content.replace(/import Service15 from "\.\.\/\.\.\/\.\.\/public\/assets\/imgs\/service\/5\.jpg";/, 'import Service15 from "../../../public/assets/imgs/service/service_tech_5.png";');

content = content.replace(/Interaction <br \/>\s*Design/, 'Cloud <br /> Architecture');
content = content.replace(/Motion & Branding <br \/>\s*Design/, 'Cybersecurity & <br /> Compliance');
content = content.replace(/Digital <br \/> Maketing/, 'Blockchain & <br /> Web3');
content = content.replace(/Concept and <br \/>\s*Strategy/, 'DevOps & <br /> SRE');
content = content.replace(/Illustrations & <br \/> Prototype/, 'Research & <br /> Development');

content = content.replace(/User paths or user flows functional models/g, 'Cloud Computing & Infrastructure');
content = content.replace(/This is the second workshop of the UX design[\s\S]*?persona can achieve their goal\./g, 'We engineer highly scalable, fault-tolerant cloud architectures designed to handle millions of concurrent users. Our team specializes in container orchestration, microservices, and multi-cloud strategies to ensure your applications remain robust and reliable under any load.');

content = content.replace(/<ul>[\s\S]*?<\/ul>/g, `<ul>
  <li>+ Distributed Systems</li>
  <li>+ Kubernetes & Docker</li>
  <li>+ Zero-Trust Security</li>
  <li>+ Smart Contracts</li>
  <li>+ CI/CD Pipelines</li>
  <li>+ Performance Tuning</li>
</ul>`);

content = content.replace(/UMotion & Branding Design/g, 'Cybersecurity & Compliance');
content = content.replace(/Web & Mobile Development/g, 'Full-Stack Software Engineering');
content = content.replace(/Illustrations & Prototype/g, 'Research & Development');

fs.writeFileSync('src/components/service/Service1.jsx', content);
