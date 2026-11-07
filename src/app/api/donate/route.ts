import { handleEnquiry } from "@/lib/enquiry";

export function POST(request: Request) {
  return handleEnquiry(request, "Donation");
}
