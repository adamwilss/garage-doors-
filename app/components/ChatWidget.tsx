"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { MessageCircle, X, Send, Bot, User, Maximize2, ArrowLeft, Phone, FileText } from "lucide-react";
import Link from "next/link";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const WELCOME_MESSAGE: Message = {
  id: 0,
  role: "assistant",
  content:
    "Hello! I'm Garry, the assistant for Quality Garage Doors Carlisle. I can help with questions about garage doors, gates, repairs and automation in Carlisle and the surrounding area. What would you like to know?",
};

const QUICK_LINKS = [
  { label: "Services", href: "/garage-doors", icon: null },
  { label: "Repairs", href: "/garage-door-repairs", icon: null },
  { label: "Contact", href: "/contact", icon: FileText },
  { label: "Call Us", href: "tel:01228532495", icon: Phone },
];

function LinkifiedText({ text, fullPage }: { text: string; fullPage?: boolean }) {
  const parts = useMemo(() => {
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const result: React.ReactNode[] = [];
    let lastIndex = 0;
    let match;
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        result.push(text.slice(lastIndex, match.index));
      }
      const [, linkText, href] = match;
      const isExternal = href.startsWith("http") || href.startsWith("tel:");
      if (isExternal) {
        result.push(
          <a
            key={`${match.index}-link`}
            href={href}
            className="underline font-semibold text-accent hover:opacity-80"
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {linkText}
          </a>
        );
      } else {
        result.push(
          <Link
            key={`${match.index}-link`}
            href={href}
            className="underline font-semibold text-accent hover:opacity-80"
          >
            {linkText}
          </Link>
        );
      }
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) {
      result.push(text.slice(lastIndex));
    }
    return result.length ? result : [text];
  }, [text]);

  return (
    <span className={`whitespace-pre-wrap ${fullPage ? "text-base" : "text-sm"}`}>
      {parts.map((part, i) => (
        <span key={i}>{part}</span>
      ))}
    </span>
  );
}

function ChatPanel({
  messages,
  loading,
  input,
  setInput,
  onSend,
  fullPage = false,
}: {
  messages: Message[];
  loading: boolean;
  input: string;
  setInput: (v: string) => void;
  onSend: () => void;
  fullPage?: boolean;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <>
      <div
        ref={scrollRef}
        className={`flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 bg-slate-50 dark:bg-[#111111] ${
          fullPage ? "" : "min-h-[280px] max-h-[400px]"
        }`}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "assistant" && (
              <div className="w-9 h-9 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0 mt-0.5">
                <Bot className="w-5 h-5" />
              </div>
            )}
            <div
              className={`px-4 py-3 rounded-2xl max-w-[85%] leading-relaxed ${
                msg.role === "user"
                  ? "bg-accent text-white rounded-br-sm"
                  : "bg-white dark:bg-[#1a1a1a] text-slate-800 rounded-bl-sm shadow-sm dark:shadow-none border border-slate-200 dark:border-[#2a2a2a]"
              }`}
            >
              <LinkifiedText text={msg.content} fullPage={fullPage} />
            </div>
            {msg.role === "user" && (
              <div className="w-9 h-9 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0 mt-0.5">
                <User className="w-5 h-5" />
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div className="flex gap-3">
            <div className="w-9 h-9 rounded-full bg-accent/15 text-accent flex items-center justify-center shrink-0">
              <Bot className="w-5 h-5" />
            </div>
            <div className="bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-2xl rounded-bl-sm px-4 py-3">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600 animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600 animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-600 animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="px-3 sm:px-6 py-3 sm:py-4 border-t border-slate-200 dark:border-[#2a2a2a] bg-white dark:bg-[#141414] shrink-0">
        <div className="flex flex-wrap gap-2 mb-3">
          {QUICK_LINKS.map((link) => {
            const isExternal = link.href.startsWith("http") || link.href.startsWith("tel:");
            const Tag = isExternal ? "a" : Link;
            const props = isExternal ? { href: link.href } : { href: link.href };
            return (
              <Tag
                key={link.label}
                {...props}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent-light/80 dark:bg-accent/20 hover:bg-accent-light dark:hover:bg-accent/30 text-accent dark:text-[#7aaef7] text-xs font-medium rounded-full transition-colors"
              >
                {link.icon && <link.icon className="w-3 h-3" />}
                {link.label}
              </Tag>
            );
          })}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Garry anything..."
            className={`flex-1 px-4 py-3 rounded-xl border border-slate-300 dark:border-[#333] bg-white dark:bg-[#0f0f0f] text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:ring-2 focus:ring-accent focus:border-accent outline-none ${
              fullPage ? "text-base" : "text-sm"
            }`}
          />
          <button
            type="button"
            onClick={onSend}
            disabled={!input.trim() || loading}
            className="px-4 py-3 bg-accent hover:bg-accent-600 disabled:opacity-50 text-white rounded-xl transition-colors"
          >
            <Send className={`${fullPage ? "w-5 h-5" : "w-4 h-4"}`} />
          </button>
        </div>
      </div>
    </>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const chatHistory = messages
        .filter((m) => m.role !== "assistant" || m.id !== 0)
        .concat(userMsg)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: chatHistory }),
      });

      const data = await res.json();

      const assistantMsg: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: data.reply || data.error || "Sorry, something went wrong. Please try again.",
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      const errorMsg: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: "Sorry, I couldn't connect. Please try again later or call us directly.",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="fixed bottom-20 lg:bottom-8 right-4 z-50 w-14 h-14 rounded-full bg-accent hover:bg-accent-600 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105"
        aria-label={open ? "Close chat" : "Chat with Garry"}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-36 lg:bottom-24 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm bg-white dark:bg-[#1a1a1a] border border-slate-200 dark:border-[#2a2a2a] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-4 py-3 bg-accent text-white flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <div>
                <p className="text-sm font-semibold">Garry</p>
                <p className="text-xs text-white/80">Quality Garage Doors</p>
              </div>
            </div>
            <Link
              href="/chat"
              className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
              title="Open full page chat"
            >
              <Maximize2 className="w-4 h-4" />
            </Link>
          </div>

          <ChatPanel
            messages={messages}
            loading={loading}
            input={input}
            setInput={setInput}
            onSend={handleSend}
          />
        </div>
      )}
    </>
  );
}

export function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const chatHistory = messages
        .filter((m) => m.role !== "assistant" || m.id !== 0)
        .concat(userMsg)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: chatHistory }),
      });

      const data = await res.json();

      const assistantMsg: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: data.reply || data.error || "Sorry, something went wrong. Please try again.",
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      const errorMsg: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: "Sorry, I couldn't connect. Please try again later or call us directly.",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-[#0a0a0a]">
      {/* Header */}
      <div className="px-4 sm:px-6 py-4 bg-accent text-white flex items-center gap-3 shrink-0">
        <Link
          href="/"
          className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
          title="Back to home"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
          <Bot className="w-6 h-6" />
        </div>
        <div>
          <p className="text-lg font-bold">Garry</p>
          <p className="text-sm text-white/80">Quality Garage Doors Carlisle</p>
        </div>
      </div>

      {/* Chat area */}
      <ChatPanel
        messages={messages}
        loading={loading}
        input={input}
        setInput={setInput}
        onSend={handleSend}
        fullPage
      />
    </div>
  );
}