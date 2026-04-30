import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Twitter, Facebook, Linkedin, Link as LinkIcon, Share2 } from "lucide-react";
import { AppEvent } from "../../types";
import { cn } from "../../lib/utils";

interface ShareModalProps {
  event: AppEvent;
  isOpen: boolean;
  onClose: () => void;
}

export function ShareModal({ event, isOpen, onClose }: ShareModalProps) {
  const [copied, setCopied] = React.useState(false);
  const shareUrl = window.location.href; // In a real app, this would be the specific event URL
  const shareTitle = `Check out ${event.title} at Kunsthafen!`;

  const shareOptions = [
    {
      name: "Twitter",
      icon: Twitter,
      color: "hover:text-[#1DA1F2]",
      onClick: () => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`, "_blank");
      }
    },
    {
      name: "Facebook",
      icon: Facebook,
      color: "hover:text-[#4267B2]",
      onClick: () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, "_blank");
      }
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      color: "hover:text-[#0077B5]",
      onClick: () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, "_blank");
      }
    }
  ];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm bg-slate-900 border border-white/10 rounded-3xl shadow-neo p-8 z-[101]"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                  <Share2 className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-slate-100">Share Event</h2>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-3">
                {shareOptions.map((option) => (
                  <button
                    key={option.name}
                    onClick={option.onClick}
                    className={cn(
                      "flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-800/50 border border-white/5 text-slate-400 transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:border-white/10",
                      option.color
                    )}
                  >
                    <option.icon className="w-6 h-6 mb-2" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">{option.name}</span>
                  </button>
                ))}
              </div>

              <div className="relative group/copy mt-6">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-2xl blur-md opacity-20 group-hover/copy:opacity-40 transition-opacity" />
                <div className="relative flex items-center bg-slate-950 border border-white/5 rounded-2xl p-4">
                  <span className="flex-1 text-slate-500 text-xs truncate mr-4">
                    {shareUrl}
                  </span>
                  <button
                    onClick={copyToClipboard}
                    className={cn(
                      "shrink-0 flex items-center space-x-2 px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all duration-300",
                      copied 
                        ? "bg-green-500/20 text-green-400 border border-green-500/30" 
                        : "bg-slate-800 hover:bg-slate-700 text-cyan-400"
                    )}
                  >
                    <LinkIcon className="w-3 h-3" />
                    <span>{copied ? "Copied!" : "Copy"}</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
