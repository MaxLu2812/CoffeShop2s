import Container from "@/components/ui/container";

export default function Loading() {
  return (
    <Container className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
        <p className="font-body mt-4 text-sm text-text-secondary">Brewing...</p>
      </div>
    </Container>
  );
}
