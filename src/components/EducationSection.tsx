import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      institution: "University of Virginia",
      degree: "Bachelor's Degree",
      period: "2010 – 2014",
      location: "Charlottesville, VA",
      details: [
        "Comprehensive computer science and software engineering foundation",
        "Focus on distributed systems and emerging technologies",
        "Strong foundation in mathematics and problem-solving",
        "Leadership roles in technology student organizations"
      ],
      achievements: [
        "Dean's List recognition",
        "Technology Innovation Award",
        "Student Leadership Excellence"
      ],
      color: "primary"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Education & <span className="text-glow-accent">Foundation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My academic journey provided the strong foundation in computer science and 
            problem-solving that drives my success in blockchain engineering today.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full" />
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent" />

            {/* Education Cards */}
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div key={edu.institution} className="relative pl-20">
                  {/* Institution Badge */}
                  <div className={`absolute left-0 top-6 w-16 h-16 bg-gradient-to-br from-${edu.color} to-${edu.color}/60 rounded-full flex items-center justify-center border-4 border-background`}>
                    <GraduationCap className="w-8 h-8 text-background" />
                  </div>

                  {/* Achievement Badge */}
                  <div className="absolute left-20 top-2 flex items-center gap-2 px-3 py-1 bg-muted rounded-full text-sm">
                    <Award className={`w-4 h-4 text-${edu.color}`} />
                    <span className="font-semibold">Academic Excellence</span>
                  </div>

                  {/* Education Card */}
                  <div className="card-glow space-y-6">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold text-glow-primary">{edu.institution}</h3>
                        <p className="text-lg font-semibold text-accent">{edu.degree}</p>
                      </div>
                      
                      <div className="flex flex-col lg:items-end gap-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-secondary flex items-center gap-2">
                        <GraduationCap className="w-5 h-5" />
                        Academic Focus
                      </h4>
                      <ul className="space-y-2">
                        {edu.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                            <div className={`w-2 h-2 rounded-full bg-${edu.color} mt-2 flex-shrink-0`} />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-secondary">Key Achievements</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement) => (
                          <span 
                            key={achievement}
                            className={`px-3 py-1 bg-${edu.color}/10 text-${edu.color} rounded-lg border border-${edu.color}/20 text-sm font-medium`}
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to see how this foundation translates to real-world impact?
          </p>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-cyber"
          >
            View My Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
