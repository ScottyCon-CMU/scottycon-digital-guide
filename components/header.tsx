import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="fixed top-4 sm:top-6 left-0 w-full flex z-50 px-2">
      <div className="bg-white/50 backdrop-blur-xl border border-primary/20 rounded-2xl p-1.5 flex gap-1 shadow-[0_4px_20px_rgba(243,154,202,0.2)] overflow-x-auto w-full justify-end">
        <SignedOut>
          <SignInButton>
            <button className="text-slate-500 rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-primary text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
