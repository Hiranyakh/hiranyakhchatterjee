import FrameworkStage from "./FrameworkStage";
import FrameworkConnector from "./FrameworkConnector";

export default function FrameworkTimeline() {
  return (
    <div className="mx-auto mt-20 max-w-3xl">

      <FrameworkStage
        step="01"
        title="Think Better"
        description="Develop clarity through awareness, learning and better questions."
      />

      <FrameworkConnector active />

      <FrameworkStage
        step="02"
        title="Decide Better"
        description="Use proven frameworks to make confident decisions aligned with your goals."
      />

      <FrameworkConnector active />

      <FrameworkStage
        step="03"
        title="Build Better"
        description="Turn intentional decisions into better health, wealth and freedom."
      />

      <FrameworkConnector active />

      <div className="text-center pt-10">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37] text-white text-2xl font-bold shadow-lg">
          ★
        </div>

        <h3 className="mt-6 text-3xl font-bold text-slate-900">
          Purpose
        </h3>

        <p className="mt-3 text-slate-600">
          Every better decision ultimately leads you toward a life of purpose.
        </p>
      </div>

    </div>
  );
}