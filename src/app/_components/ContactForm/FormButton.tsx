import { useFormStatus } from "react-dom";
import Image from "next/image";
import { Button } from "@/shared/components/Button";

export function FormButton() {
  const { pending } = useFormStatus();

  return pending ? (
    <Button disabled>
      <Image
        className="me-2 h-auto w-4 animate-spin-slow object-fill md:w-5"
        src="/icons/loading.svg"
        width={20}
        height={20}
        alt="loading"
      />
      Form is Submitting
    </Button>
  ) : (
    <Button>
      Receive Reply in 24 Hours
      <Image
        className="ms-2 h-auto w-4 object-fill md:w-5"
        src="/icons/pencil.svg"
        width={17}
        height={16}
        alt="pencil"
      />
    </Button>
  );
}
