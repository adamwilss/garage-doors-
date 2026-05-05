import { Metadata } from "next";
import { ChatPage } from "../components/ChatWidget";

export const metadata: Metadata = {
  title: "Chat with Garry | Quality Garage Doors Carlisle",
  description: "Ask Garry anything about garage doors, gates, repairs and automation in Carlisle and the surrounding area.",
};

export default function ChatPageRoute() {
  return <ChatPage />;
}