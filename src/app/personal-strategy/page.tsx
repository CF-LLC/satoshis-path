import PersonalStackStrategy from "@/components/PersonalStackStrategy";

export const metadata = {
  title: "My Personal Bitcoin Stack Strategy | Satoshi's Path",
  description: "A detailed, step-by-step guide to my proven Bitcoin accumulation strategy. Learn how to build a comprehensive approach to stacking sats.",
};

export default function PersonalStrategyPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-yellow-50">
      <PersonalStackStrategy />
    </div>
  );
}