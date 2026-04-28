"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getFirebaseDb } from "@/lib/firebase";

export interface ContactFormData {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export function useFirebase() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitContact = async (data: ContactFormData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // getFirebaseDb() is only called client-side (inside useEffect/event handler)
      const db = getFirebaseDb();
      await addDoc(collection(db, "contacts"), {
        ...data,
        createdAt: serverTimestamp(),
      });
      setSuccess(true);
    } catch (err) {
      console.error("Firestore error:", err);
      setError("Something went wrong. Please try again or WhatsApp us.");
    } finally {
      setLoading(false);
    }
  };

  const resetState = () => {
    setSuccess(false);
    setError(null);
  };

  return { submitContact, loading, success, error, resetState };
}
