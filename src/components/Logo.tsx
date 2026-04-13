const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img src="/favicon.svg" alt="Vibe Camp Logo" className="w-10 h-10 shadow-lg rounded-xl" />
    </div>
  );
};

export default Logo;
