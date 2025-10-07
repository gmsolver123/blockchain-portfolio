import { ExternalLink, Github, Zap, Shield, TrendingUp, Users, ArrowRight, ChevronLeft, ChevronRight, X, Code, Database, Globe, Smartphone } from "lucide-react";
import { useState, useEffect } from "react";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [streamingImages, setStreamingImages] = useState({});
  const [pausedStreaming, setPausedStreaming] = useState({});

  const projects = [
    {
      id: "defi-protocol",
      title: "Multi-Chain DeFi Protocol",
      description: "Advanced DeFi protocol with cross-chain staking, yield farming, and liquidity mining on Ethereum and Solana",
      achievements: ["$5M+ TVL", "80% faster settlement", "7-member team led"],
      technologies: ["Solidity", "Rust", "Anchor", "React", "Web3.js", "Ethers.js"],
      category: "DeFi",
      icon: TrendingUp,
      images: [
        "/AICO/1.jpg",
        "/AICO/2.jpg", 
        "/AICO/3.jpg",
        "/AICO/4.jpg"
      ],
      gradient: "from-primary to-primary/60",
      glowColor: "primary",
      details: {
        overview: "A comprehensive DeFi protocol that enables cross-chain staking, yield farming, and liquidity mining across Ethereum and Solana networks. The platform reduces settlement latency by 80% while maintaining security through rigorous smart contract audits.",
        features: [
          "Multi-chain smart contract deployment (Ethereum & Solana)",
          "Cross-chain bridge for asset transfers",
          "Advanced staking and yield farming mechanisms",
          "Real-time yield optimization algorithms",
          "Comprehensive security audit integration"
        ],
        challenges: [
          "Implementing secure cross-chain communication",
          "Optimizing gas costs across different networks",
          "Ensuring consistent yield calculations",
          "Managing liquidity across multiple chains"
        ],
        results: [
          "80% reduction in settlement latency",
          "$5M+ total value locked (TVL)",
          "Led and mentored 7-member blockchain team",
          "Zero critical vulnerabilities in security audits"
        ],
        stack: {
          frontend: ["React", "TypeScript", "Tailwind CSS", "Web3.js", "Ethers.js"],
          blockchain: ["Solidity", "Rust", "Anchor", "Hardhat", "OpenZeppelin"],
          backend: ["Node.js", "Express", "IPFS", "Redis"],
          database: ["PostgreSQL", "MongoDB"],
          infrastructure: ["AWS", "Docker", "Infura", "Alchemy"],
          tools: ["Git", "MythX", "Slither", "Truffle", "Remix"]
        },
        links: {
          live: "https://defi-protocol-demo.com",
          github: "https://github.com/yourusername/defi-protocol"
        }
      }
    },
    {
      id: "nft-marketplace",
      title: "NFT Marketplace Platform",
      description: "High-volume NFT marketplace with auctions, royalties, and fixed-price modules processing $2M+ transactions",
      achievements: ["$2M+ volume", "20+ tokens", "95% uptime"],
      technologies: ["Solidity", "React", "Redux", "IPFS", "Web3.js"],
      category: "NFT",
      icon: Shield,
      images: [
        "/AmarisAI/1.jpg",
        "/AmarisAI/2.jpg",
        "/AmarisAI/3.jpg", 
        "/AmarisAI/4.jpg"
      ],
      gradient: "from-accent to-accent/60",
      glowColor: "accent",
      details: {
        overview: "A comprehensive NFT marketplace platform that supports ERC-20 and ERC-721 token ecosystems for fundraising, compliant launches, and digital asset issuance. The platform includes advanced auction mechanisms, royalty systems, and fixed-price modules.",
        features: [
          "ERC-20 and ERC-721 token deployment and management",
          "Advanced auction and bidding systems",
          "Automatic royalty distribution",
          "Fixed-price and dynamic pricing modules",
          "KYC/AML compliance integration"
        ],
        challenges: [
          "Handling high-volume transaction processing",
          "Implementing fair auction mechanisms",
          "Ensuring royalty distribution accuracy",
          "Integrating compliance requirements"
        ],
        results: [
          "$2M+ in transaction volume processed",
          "20+ ERC-20/721 tokens deployed",
          "95% uptime reliability achieved",
          "3x increase in token utility during incentive programs"
        ],
        stack: {
          frontend: ["React", "Redux", "TypeScript", "Web3.js", "Ethers.js"],
          blockchain: ["Solidity", "Hardhat", "Truffle", "OpenZeppelin"],
          backend: ["Node.js", "Express", "IPFS", "Redis"],
          database: ["PostgreSQL", "MongoDB"],
          infrastructure: ["AWS", "Docker", "Infura", "Alchemy"],
          tools: ["Git", "Slither", "MythX", "Truffle", "MetaMask"]
        },
        links: {
          live: "https://nft-marketplace-demo.com",
          github: "https://github.com/yourusername/nft-marketplace"
        }
      }
    },
    {
      id: "cross-chain-bridge",
      title: "Cross-Chain Bridge Protocol",
      description: "Advanced cross-chain bridge enabling compliant asset transfers between public and private blockchains with zk-SNARK privacy",
      achievements: ["50% fee reduction", "zk-SNARK privacy", "GDPR compliant"],
      technologies: ["Solidity", "Rust", "zk-SNARK", "React", "Web3.js"],
      category: "Cross-Chain",
      icon: Users,
      images: [
        "/BloodLoop/1.jpg",
        "/BloodLoop/2.jpg",
        "/BloodLoop/3.jpg",
        "/BloodLoop/4.jpg"
      ],
      gradient: "from-secondary to-secondary/60",
      glowColor: "secondary",
      details: {
        overview: "A sophisticated cross-chain bridge protocol that enables secure asset transfers between public and private blockchains. The platform implements zk-SNARK privacy layers for verifiable computation and data confidentiality while meeting GDPR/HIPAA standards.",
        features: [
          "Cross-chain asset transfers between public and private blockchains",
          "zk-SNARK privacy layers for data confidentiality",
          "On-chain auditability and transparency",
          "Compliant transfers meeting regulatory standards",
          "Seamless user experience for non-technical users"
        ],
        challenges: [
          "Implementing secure cross-chain communication protocols",
          "Ensuring data privacy while maintaining auditability",
          "Meeting GDPR/HIPAA compliance requirements",
          "Reducing regulatory exposure through privacy layers"
        ],
        results: [
          "50% reduction in transaction fees",
          "zk-SNARK privacy implementation for data confidentiality",
          "GDPR/HIPAA compliance achieved",
          "Seamless user experience for enterprise and retail users"
        ],
        stack: {
          frontend: ["React", "TypeScript", "Web3.js", "Ethers.js", "Tailwind CSS"],
          blockchain: ["Solidity", "Rust", "zk-SNARK", "Hardhat", "OpenZeppelin"],
          backend: ["Node.js", "Express", "IPFS", "Redis"],
          database: ["PostgreSQL", "MongoDB"],
          infrastructure: ["AWS", "Docker", "Nginx", "Infura"],
          tools: ["Git", "MythX", "Slither", "Truffle", "MetaMask"]
        },
        links: {
          live: "https://cross-chain-bridge-demo.com",
          github: "https://github.com/yourusername/cross-chain-bridge"
        }
      }
    },
    {
      id: "dao-governance",
      title: "DAO Governance Framework",
      description: "Decentralized governance system using ERC-20 tokens for community-driven decision-making and automated execution",
      achievements: ["3x token utility", "Automated execution", "Community driven"],
      technologies: ["Solidity", "React", "Redux", "Web3.js", "Ethers.js"],
      category: "DAO",
      icon: Code,
      images: [
        "/EvolveNeuro/1.jpg",
        "/EvolveNeuro/2.jpg",
        "/EvolveNeuro/3.jpg",
        "/EvolveNeuro/4.jpg"
      ],
      gradient: "from-primary to-accent",
      glowColor: "primary",
      details: {
        overview: "A comprehensive DAO governance framework that enables decentralized community-driven decision-making using ERC-20 tokens. The system includes automated proposal creation, voting mechanisms, and execution protocols for transparent governance.",
        features: [
          "ERC-20 token-based voting system",
          "Automated proposal creation and management",
          "Transparent voting mechanisms with on-chain records",
          "Automated execution of approved proposals",
          "Community-driven decision-making processes"
        ],
        challenges: [
          "Implementing secure voting mechanisms",
          "Ensuring fair token distribution for governance",
          "Automating proposal execution safely",
          "Maintaining transparency while protecting privacy"
        ],
        results: [
          "3x increase in token utility through governance participation",
          "Automated execution of community-approved proposals",
          "100% transparent voting records on-chain",
          "Successful community-driven decision-making implementation"
        ],
        stack: {
          frontend: ["React", "Redux", "TypeScript", "Web3.js", "Ethers.js"],
          blockchain: ["Solidity", "Hardhat", "Truffle", "OpenZeppelin"],
          backend: ["Node.js", "Express", "IPFS", "Redis"],
          database: ["PostgreSQL", "MongoDB"],
          infrastructure: ["AWS", "Docker", "Infura", "Alchemy"],
          tools: ["Git", "Slither", "MythX", "Truffle", "MetaMask"]
        },
        links: {
          live: "https://dao-governance-demo.com",
          github: "https://github.com/yourusername/dao-governance"
        }
      }
    },
    {
      id: "nft-identity",
      title: "NFT Identity Framework",
      description: "Blockchain-based identity and consent management system with granular access controls for secure record management",
      achievements: ["Granular controls", "Real-world adoption", "Secure records"],
      technologies: ["Solidity", "React", "IPFS", "Web3.js", "Ethers.js"],
      category: "Identity",
      icon: Globe,
      images: [
        "/MetaHorse/1.jpg",
        "/MetaHorse/2.jpg",
        "/MetaHorse/3.jpg",
        "/MetaHorse/4.jpg"
      ],
      gradient: "from-accent to-secondary",
      glowColor: "accent",
      details: {
        overview: "An innovative NFT-based identity and consent framework that provides granular access controls for secure record management. The system enables real-world adoption of blockchain-backed identity solutions with enhanced security and user control.",
        features: [
          "NFT-based identity verification system",
          "Granular access controls for data management",
          "Consent management with blockchain transparency",
          "Secure record management and storage",
          "Real-world adoption capabilities"
        ],
        challenges: [
          "Implementing secure identity verification on blockchain",
          "Creating granular access control mechanisms",
          "Ensuring user privacy while maintaining transparency",
          "Enabling real-world adoption of blockchain identity"
        ],
        results: [
          "Granular access controls implemented successfully",
          "Real-world adoption of blockchain-backed identity solutions",
          "Enhanced secure record management capabilities",
          "User-controlled consent management system"
        ],
        stack: {
          frontend: ["React", "TypeScript", "Web3.js", "Ethers.js", "Tailwind CSS"],
          blockchain: ["Solidity", "Hardhat", "OpenZeppelin", "IPFS"],
          backend: ["Node.js", "Express", "IPFS", "Redis"],
          database: ["PostgreSQL", "MongoDB"],
          infrastructure: ["AWS", "Docker", "Infura", "Alchemy"],
          tools: ["Git", "Slither", "MythX", "Truffle", "MetaMask"]
        },
        links: {
          live: "https://nft-identity-demo.com",
          github: "https://github.com/yourusername/nft-identity"
        }
      }
    },
    {
      id: "fullstack-dapp",
      title: "Full-Stack dApp Platform",
      description: "Comprehensive dApp development platform with React/Next.js frontends and Node.js backends for Web3-enabled applications",
      achievements: ["Web3 integration", "Non-technical users", "Real-time dashboards"],
      technologies: ["React", "Next.js", "Node.js", "Web3.js", "Ethers.js"],
      category: "Full-Stack",
      icon: Smartphone,
      images: [
        "/TookiTaki/1.jpg",
        "/TookiTaki/2.jpg",
        "/TookiTaki/3.jpg",
        "/TookiTaki/4.jpg"
      ],
      gradient: "from-secondary to-primary",
      glowColor: "secondary",
      details: {
        overview: "A comprehensive full-stack dApp development platform that enables non-technical users to securely interact with smart contracts. The platform includes React/Next.js frontends, Node.js backends, and seamless Web3 wallet integration for enterprise and retail users.",
        features: [
          "React/Next.js frontend development with Web3 integration",
          "Node.js backend services with real-time APIs",
          "Web3 wallet integration for secure smart contract interaction",
          "Real-time dashboards for token sales and governance",
          "User-friendly interface for non-technical users"
        ],
        challenges: [
          "Creating intuitive interfaces for complex blockchain interactions",
          "Ensuring secure Web3 wallet integration",
          "Building real-time dashboards for blockchain data",
          "Making blockchain technology accessible to non-technical users"
        ],
        results: [
          "Successful Web3 integration for non-technical users",
          "Real-time dashboards for token sales and governance participation",
          "Secure smart contract interaction capabilities",
          "Improved adoption among enterprise and retail users"
        ],
        stack: {
          frontend: ["React", "Next.js", "TypeScript", "Web3.js", "Ethers.js", "Tailwind CSS"],
          backend: ["Node.js", "Express", "Socket.io", "Redis"],
          blockchain: ["Web3.js", "Ethers.js", "MetaMask", "WalletConnect"],
          database: ["PostgreSQL", "MongoDB", "Redis"],
          infrastructure: ["AWS", "Docker", "Nginx", "Infura"],
          tools: ["Git", "Jest", "Cypress", "ESLint", "Prettier"]
        },
        links: {
          live: "https://fullstack-dapp-demo.com",
          github: "https://github.com/yourusername/fullstack-dapp"
        }
      }
    }
  ];

  // Initialize streaming images state
  useEffect(() => {
    const initialStreaming = {};
    projects.forEach(project => {
      initialStreaming[project.id] = 0;
    });
    setStreamingImages(initialStreaming);
  }, []);

  // Auto-stream images for project cards
  useEffect(() => {
    const intervals = {};
    
    projects.forEach(project => {
      if (project.images.length > 1) {
        intervals[project.id] = setInterval(() => {
          setStreamingImages(prev => {
            // Only update if not paused
            if (!pausedStreaming[project.id]) {
              return {
                ...prev,
                [project.id]: (prev[project.id] + 1) % project.images.length
              };
            }
            return prev;
          });
        }, 3000); // Change image every 3 seconds
      }
    });

    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, [pausedStreaming]);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const handleMouseEnter = (projectId) => {
    setPausedStreaming(prev => ({
      ...prev,
      [projectId]: true
    }));
  };

  const handleMouseLeave = (projectId) => {
    setPausedStreaming(prev => ({
      ...prev,
      [projectId]: false
    }));
  };

  return (
    <>
    <section className="py-20 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Featured <span className="text-glow-secondary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Check out some of the projects I've been a part of. Each one represents a unique challenge, 
              and I'm proud of the innovative solutions I've developed for these applications.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
                key={project.id}
              className="group relative"
              style={{ animationDelay: `${index * 200}ms` }}
            >
                {/* Project Card */}
                <div 
                  className="card-glow h-full cursor-pointer transition-all duration-500 group-hover:scale-105 overflow-hidden"
                  onClick={() => openProjectDetails(project)}
                  onMouseEnter={() => handleMouseEnter(project.id)}
                  onMouseLeave={() => handleMouseLeave(project.id)}
                >
                  {/* Project Image Carousel */}
                <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                  <img 
                      src={project.images[streamingImages[project.id] || 0]} 
                    alt={project.title}
                      className="w-full h-full object-cover transition-all duration-1000 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    
                    {/* Image Counter */}
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded">
                        {streamingImages[project.id] + 1 || 1}/{project.images.length}
                      </span>
                    </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 bg-background/90 backdrop-blur-sm text-${project.glowColor} rounded-lg border border-${project.glowColor}/20 text-sm font-medium`}>
                      {project.category}
                    </span>
                  </div>

                    {/* Streaming Indicator */}
                    {project.images.length > 1 && (
                      <div className="absolute bottom-3 right-3">
                        <div className="flex gap-1">
                          {project.images.map((_, index) => (
                            <div
                              key={index}
                              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                index === (streamingImages[project.id] || 0) 
                                  ? 'bg-white' 
                                  : 'bg-white/30'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                </div>

                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient}`}>
                    <project.icon className="w-6 h-6 text-background" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 mb-6">
                  <h3 className={`text-xl font-bold text-glow-${project.glowColor} group-hover:text-${project.glowColor} transition-colors`}>
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="grid grid-cols-3 gap-2">
                    {project.achievements.map((achievement, idx) => (
                      <div key={idx} className="text-center p-2 bg-muted rounded-lg">
                        <div className={`text-sm font-bold text-${project.glowColor}`}>
                          {achievement.split(' ')[0]}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {achievement.split(' ').slice(1).join(' ')}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-background border border-border rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-muted rounded text-xs font-medium">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-4 border-t border-border">
                    <button 
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-muted rounded-lg hover:bg-primary/20 transition-colors group"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.details.links.live, '_blank');
                      }}
                    >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </button>
                    <button 
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-muted rounded-lg hover:bg-accent/20 transition-colors group"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.details.links.github, '_blank');
                      }}
                    >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </button>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-500 pointer-events-none`} />
              </div>

              {/* Floating Badge */}
              <div className={`absolute -top-2 -right-2 p-2 bg-${project.glowColor} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:animate-glow`}>
                <Zap className="w-4 h-4 text-background" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background border border-border rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedProject.gradient}`}>
                  <selectedProject.icon className="w-6 h-6 text-background" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                  <p className="text-muted-foreground">{selectedProject.category}</p>
                </div>
              </div>
              <button 
                onClick={closeProjectDetails}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="p-6 space-y-8">
                {/* Image Carousel */}
                <div className="relative">
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                    <img 
                      src={selectedProject.images[currentImageIndex]} 
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                    
                    {/* Navigation Arrows */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button 
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button 
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </>
                    )}
                  </div>
                  
                  {/* Image Indicators */}
                  {selectedProject.images.length > 1 && (
                    <div className="flex justify-center gap-2 mt-4">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-primary' : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Overview */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Overview</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.details.overview}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Key Features</h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {selectedProject.details.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Results & Impact</h3>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {selectedProject.details.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Stack */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Technology Stack</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {Object.entries(selectedProject.details.stack).map(([category, technologies]) => (
                      <div key={category} className="space-y-2">
                        <h4 className="font-semibold capitalize">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-3 py-1 bg-muted rounded-lg text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Challenges Overcome</h3>
                  <ul className="space-y-2">
                    {selectedProject.details.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex gap-3 p-6 border-t border-border">
              <button 
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                onClick={() => window.open(selectedProject.details.links.live, '_blank')}
              >
                <ExternalLink className="w-4 h-4" />
                <span className="font-medium">View Live Demo</span>
              </button>
              <button 
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                onClick={() => window.open(selectedProject.details.links.github, '_blank')}
              >
                <Github className="w-4 h-4" />
                <span className="font-medium">View Source Code</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectsSection;