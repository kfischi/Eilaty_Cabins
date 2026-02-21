"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/data/content";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const QUICK_QUESTIONS = [
  "מה המחיר ללילה?",
  "האם יש בריכה?",
  "כמה אנשים נכנסים?",
  "איך מגיעים?",
];

const WELCOME_MESSAGE: Message = {
  role: "assistant",
  content: "שלום! אני כאן לעזור לכם לתכנן חופשה מושלמת בבקתות צוריאל 🌿\n\nאשמח לענות על שאלות, לבדוק זמינות ולעזור לכם לבחור את הבקתה המתאימה. במה אוכל לעזור?",
  timestamp: new Date(),
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [showTooltip, setShowTooltip] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Hide tooltip after 5 seconds
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setShowTooltip(false);
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: text.trim(), timestamp: new Date() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await res.json();
      if (data.message) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.message, timestamp: new Date() },
        ]);
      } else {
        throw new Error("No message");
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "מצטער, הייתה תקלה זמנית. אנא פנו אלינו ישירות ב-WhatsApp 💬",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const buildWhatsAppLink = () => {
    const lastUserMsg = [...messages].reverse().find((m) => m.role === "user");
    const text = lastUserMsg
      ? `היי! צ'אטתי עם הבוט שלכם ואני מעוניין לשמוע עוד. שאלתי: "${lastUserMsg.content}"`
      : "היי! אשמח לשמוע על בקתות צוריאל";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const formatTime = (date: Date) =>
    date.toLocaleTimeString("he-IL", { hour: "2-digit", minute: "2-digit" });

  // Render message text with line breaks
  const renderText = (text: string) =>
    text.split("\n").map((line, i) => (
      <span key={i}>
        {line}
        {i < text.split("\n").length - 1 && <br />}
      </span>
    ));

  return (
    <>
      {/* Floating Button */}
      <div style={{ position: "fixed", bottom: 32, left: 32, zIndex: 998 }}>
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.9 }}
              style={{
                position: "absolute",
                right: 76,
                top: "50%",
                background: "#1a2e1a",
                color: "#f5f0e8",
                fontSize: "0.8rem",
                fontWeight: 600,
                padding: "10px 16px",
                borderRadius: 50,
                whiteSpace: "nowrap",
                boxShadow: "0 4px 20px rgba(26,46,26,0.3)",
                border: "1px solid rgba(201,162,39,0.3)",
              }}
            >
              שאלו אותי כל דבר! 💬
              <span style={{
                position: "absolute",
                left: -6,
                top: "50%",
                transform: "translateY(-50%) rotate(-45deg)",
                width: 12,
                height: 12,
                background: "#1a2e1a",
                borderRight: "1px solid rgba(201,162,39,0.3)",
                borderBottom: "1px solid rgba(201,162,39,0.3)",
              }} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Badge */}
        {hasUnread && !isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            style={{
              position: "absolute",
              top: -4,
              right: -4,
              width: 18,
              height: 18,
              background: "#e8c547",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.65rem",
              fontWeight: 800,
              color: "#1a2e1a",
              zIndex: 1,
            }}
          >
            1
          </motion.div>
        )}

        <motion.button
          onClick={() => setIsOpen((p) => !p)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #1a2e1a, #3d6b3d)",
            border: "2px solid rgba(201,162,39,0.4)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 32px rgba(26,46,26,0.4)",
            fontSize: isOpen ? "1.3rem" : "1.6rem",
          }}
          aria-label="פתח צ'אט"
        >
          {isOpen ? "✕" : "🌿"}
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: "fixed",
              bottom: 108,
              left: 32,
              zIndex: 997,
              width: "min(380px, calc(100vw - 48px))",
              maxHeight: "70vh",
              background: "#ffffff",
              borderRadius: 24,
              boxShadow: "0 24px 80px rgba(26,46,26,0.25), 0 0 0 1px rgba(26,46,26,0.08)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Header */}
            <div style={{
              background: "linear-gradient(135deg, #1a2e1a, #2d4a2d)",
              padding: "18px 20px",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}>
              <div style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #8B5E3C, #c49a6c)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.3rem",
                flexShrink: 0,
              }}>
                🏕️
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, color: "#f5f0e8", fontSize: "0.95rem" }}>
                  בקתות צוריאל
                </div>
                <div style={{ fontSize: "0.75rem", color: "rgba(245,240,232,0.6)", display: "flex", alignItems: "center", gap: 5 }}>
                  <span style={{ width: 7, height: 7, background: "#4ade80", borderRadius: "50%", display: "inline-block" }} />
                  מענה מיידי
                </div>
              </div>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "#25D366",
                  color: "#fff",
                  borderRadius: 10,
                  padding: "6px 12px",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                💬 WhatsApp
              </a>
            </div>

            {/* Messages */}
            <div style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: 12,
              background: "#f8f5f0",
              minHeight: 0,
            }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    display: "flex",
                    justifyContent: msg.role === "user" ? "flex-start" : "flex-end",
                    gap: 8,
                    alignItems: "flex-end",
                  }}
                >
                  {msg.role === "assistant" && (
                    <div style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #1a2e1a, #3d6b3d)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.8rem",
                      flexShrink: 0,
                    }}>
                      🌿
                    </div>
                  )}
                  <div style={{ maxWidth: "78%" }}>
                    <div style={{
                      background: msg.role === "user" ? "#1a2e1a" : "#ffffff",
                      color: msg.role === "user" ? "#f5f0e8" : "#3a3d40",
                      padding: "10px 14px",
                      borderRadius: msg.role === "user"
                        ? "18px 18px 18px 4px"
                        : "18px 18px 4px 18px",
                      fontSize: "0.88rem",
                      lineHeight: 1.7,
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    }}>
                      {renderText(msg.content)}
                    </div>
                    <div style={{
                      fontSize: "0.67rem",
                      color: "#9ca3af",
                      marginTop: 4,
                      textAlign: msg.role === "user" ? "right" : "left",
                      paddingRight: msg.role === "user" ? 4 : 0,
                      paddingLeft: msg.role === "assistant" ? 4 : 0,
                    }}>
                      {formatTime(msg.timestamp)}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ display: "flex", justifyContent: "flex-end", gap: 8, alignItems: "flex-end" }}
                >
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%",
                    background: "linear-gradient(135deg, #1a2e1a, #3d6b3d)",
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem",
                  }}>🌿</div>
                  <div style={{
                    background: "#fff",
                    padding: "12px 16px",
                    borderRadius: "18px 18px 4px 18px",
                    display: "flex",
                    gap: 5,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  }}>
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
                        style={{ width: 7, height: 7, borderRadius: "50%", background: "#1a2e1a", opacity: 0.6 }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 2 && (
              <div style={{
                padding: "10px 14px 0",
                background: "#ffffff",
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                borderTop: "1px solid #f0ebe3",
              }}>
                {QUICK_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    style={{
                      background: "#f5f0e8",
                      border: "1px solid rgba(139,94,60,0.25)",
                      color: "#1a2e1a",
                      padding: "5px 12px",
                      borderRadius: 50,
                      fontSize: "0.75rem",
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "all 0.2s",
                      fontFamily: "inherit",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#1a2e1a";
                      e.currentTarget.style.color = "#e8c547";
                      e.currentTarget.style.borderColor = "#1a2e1a";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#f5f0e8";
                      e.currentTarget.style.color = "#1a2e1a";
                      e.currentTarget.style.borderColor = "rgba(139,94,60,0.25)";
                    }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div style={{
              padding: "12px 14px",
              background: "#ffffff",
              borderTop: "1px solid #f0ebe3",
              display: "flex",
              gap: 8,
              alignItems: "center",
            }}>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage(input)}
                placeholder="כתבו שאלה..."
                disabled={isLoading}
                style={{
                  flex: 1,
                  border: "1.5px solid #ede5d4",
                  borderRadius: 50,
                  padding: "10px 16px",
                  fontFamily: "inherit",
                  fontSize: "0.88rem",
                  color: "#3a3d40",
                  background: "#f8f5f0",
                  outline: "none",
                  transition: "border-color 0.2s",
                  direction: "rtl",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#1a2e1a")}
                onBlur={(e) => (e.target.style.borderColor = "#ede5d4")}
              />
              <motion.button
                onClick={() => sendMessage(input)}
                disabled={isLoading || !input.trim()}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: input.trim() && !isLoading
                    ? "linear-gradient(135deg, #1a2e1a, #3d6b3d)"
                    : "#e5e7eb",
                  border: "none",
                  cursor: input.trim() && !isLoading ? "pointer" : "not-allowed",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.1rem",
                  flexShrink: 0,
                  transition: "background 0.2s",
                }}
                aria-label="שלח"
              >
                {isLoading ? "⏳" : "➤"}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
