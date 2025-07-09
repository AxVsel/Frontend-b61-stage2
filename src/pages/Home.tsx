import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
export default function Home() {
  return (
    <div className="flex flex-col items-center ">
      {" "}
      <h1 className="text-4xl font-bold mb-4">Home Page</h1>
      <ResizablePanelGroup
        direction="vertical"
        className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
      >
        <ResizableHandle />
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              ea debitis accusantium minima necessitatibus quod alias minus, eum
              nihil, accusamus magni fuga autem quo, incidunt natus! Blanditiis
              deleniti beatae facere possimus, libero debitis sunt, voluptas
              porro incidunt eveniet laboriosam cum.
            </span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
