"use client";

import Workflow from "./workflow";

const Workflows = () => {
  return (
    <div className="flex flex-col gap-4">
      <section className="flex flex-col gap-4">
        <Workflow
          description="Creating a test Workflow"
          id="abcd123"
          name="Automation Workflow"
          publish={false}
        />
      </section>
    </div>
  );
};

export default Workflows;
