"use client";

import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

const CloseModal = () => {
  const router = useRouter();
  return (
    <Button
      variant="subtle"
      onClick={() => router.back()}
      className="w-6 h-6 p-0 rounded-md"
      aria-label="close modal"
    >
      <X className="w-4 h-4" />
    </Button>
  );
};

export default CloseModal;
