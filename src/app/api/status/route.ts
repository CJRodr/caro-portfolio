export async function GET() {
  return Response.json({
    bio_pipeline: "active",
    certs: ["IBM Data Science (in progress)", "AWS (in progress)"],
    leetcode_done: 4,
    updated_at: new Date().toISOString(),
  });
}
