"use client";

import Button from "@/components/ui/Button";

export default function FreedomCTA() {
  return (
    <div className="space-y-4">

      <Button href="/freedom-score">
        Take Your Free Freedom Score™
      </Button>

      <p className="text-sm text-slate-500">
        Takes less than 3 minutes • Instant personalised insights
      </p>

    </div>
  );
}