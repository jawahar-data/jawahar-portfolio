import Image from "next/image";

export default function FlowMatrixDiagram() {
  return (
    <div
      className="w-full rounded-xl mt-4 overflow-hidden"
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Image
        src="/images/flowmatrix-architecture.png"
        alt="FlowMatrix Pipeline Architecture"
        width={1200}
        height={675}
        className="w-full h-auto"
        priority
      />
    </div>
  );
}
