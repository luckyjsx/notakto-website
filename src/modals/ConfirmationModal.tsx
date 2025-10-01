"use client";

import React from "react";
import { DifficultyActionButton } from "@/components/ui/Buttons/DifficultyActionButton";
import { useEffect, useRef } from "react";

interface ConfirmationModalProps {
  visible: boolean;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmationModal({
  visible,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
}: ConfirmationModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "auto";
  }, [visible]);

  // Auto-focus modal when opened
  useEffect(() => {
    if (visible && modalRef.current) {
      modalRef.current.focus();
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirmation-title"
      aria-describedby="confirmation-message"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="bg-white rounded-xl shadow-xl p-6 w-96 max-w-full outline-none"
      >
        {title && (
          <h2
            id="confirmation-title"
            className="text-2xl font-semibold mb-3 text-gray-900"
          >
            {title}
          </h2>
        )}
        {message && (
          <p id="confirmation-message" className="text-gray-700 text-xl mb-6">
            {message}
          </p>
        )}

        <div className="flex flex-col gap-2">
          <DifficultyActionButton variant="level" onClick={onConfirm}>
            {confirmText}
          </DifficultyActionButton>
          <DifficultyActionButton variant="cancel" onClick={onCancel}>
            {cancelText}
          </DifficultyActionButton>
        </div>
      </div>
    </div>
  );
}
