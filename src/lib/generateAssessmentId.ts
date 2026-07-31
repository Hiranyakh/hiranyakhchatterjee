export function generateAssessmentId() {
  const chars =
    "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  let random = "";

  for (let i = 0; i < 6; i++) {
    random += chars.charAt(
      Math.floor(Math.random() * chars.length)
    );
  }

  return `FS-${random}`;
}