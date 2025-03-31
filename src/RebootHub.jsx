import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Calendar, Briefcase } from "lucide-react";

export default function RebootHubPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 md:p-12 space-y-10">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">RebootHub</h1>
        <p className="text-lg md:text-xl">
          A career reboot platform by <strong>FSU (Future Skills Union)</strong> that simulates a work environment for job seekers in transition.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <Users className="mb-4" />
            <h2 className="text-xl font-semibold mb-2">Collaborative & Personal Projects</h2>
            <p>Work solo or with others on meaningful projects like apps, articles, or hackathons.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Calendar className="mb-4" />
            <h2 className="text-xl font-semibold mb-2">Structured Weekly Routine</h2>
            <p>Attend 2–3 community meetings and 3–4 topic-focused sessions every week.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <Briefcase className="mb-4" />
            <h2 className="text-xl font-semibold mb-2">Real Work Simulation</h2>
            <p>Emulate a workplace environment with peer feedback, mock interviews, and presentations.</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <CheckCircle className="mb-4" />
            <h2 className="text-xl font-semibold mb-2">Resume & Reference Support</h2>
            <p>Complete 6+ weeks of consistent contribution to earn a volunteer credential and FSU reference.</p>
          </CardContent>
        </Card>
      </section>

      <section className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Weekly Commitment</h2>
        <p className="mb-4">Contribute at least <strong>3 hours/week</strong> by joining interviews, presenting on a topic, or working on a project.</p>
        <Button className="text-lg px-6 py-3">Join RebootHub</Button>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-10">
        Powered by <strong>Future Skills Union</strong> • Your path back to professional flow
      </footer>
    </div>
  );
}

