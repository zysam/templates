import Demo from "@/features/demo"

export const Route = createFileRoute({
  component: RouteComponent,
})

function RouteComponent() {
  return <Demo />
}
