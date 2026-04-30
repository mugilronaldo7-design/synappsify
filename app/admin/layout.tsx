"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getFirebaseAuth } from "@/lib/firebase";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    try {
      const auth = getFirebaseAuth();
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (!user) {
          router.push("/login");
        } else {
          const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
          if (user.email !== adminEmail) {
            await signOut(auth);
            router.push("/");
          } else {
            setLoading(false);
          }
        }
      });
      return () => unsubscribe();
    } catch (e) {
      console.error(e);
      router.push("/login");
    }
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-[family-name:var(--font-inter)]">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-[family-name:var(--font-syne)] font-bold text-xl tracking-tight text-[#0A0A0A]">
                <span className="text-[#7C3AED]">Admin</span>Panel
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 hidden sm:block">
                Logged in as {process.env.NEXT_PUBLIC_ADMIN_EMAIL}
              </span>
              <button
                onClick={async () => {
                  try {
                    const auth = getFirebaseAuth();
                    await signOut(auth);
                    router.push("/login");
                  } catch (e) {
                    console.error(e);
                  }
                }}
                className="text-sm text-red-600 hover:text-red-800 font-medium transition-colors"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
